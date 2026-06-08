/**
 * Generates AI-friendly plain-text fallbacks for /programm-week{1..N}.
 *
 * Why: the site is a React SPA — LLM agents fetching /programm-weekN over plain HTTP
 * see only the empty app shell. This script SSR-renders each slide of every meeting
 * and writes public/programm-week{N}.txt in the same format as public/mini-course/lesson1.txt.
 *
 * Single source of truth: the slide JSX components. No data duplication.
 */
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import { createServer, type ViteDevServer } from "vite";
import { htmlToText } from "html-to-text";
import type { ReactElement } from "react";

// react-dom/server.node.js is CJS — vite-node's SSR loader chokes on `require`.
// Load via Node's native createRequire instead; the React instance is cached by Node
// so we still share the same React with vite-node-loaded slide modules.
const nodeRequire = createRequire(import.meta.url);
const { renderToStaticMarkup } = nodeRequire("react-dom/server") as typeof import("react-dom/server");

// ---- DOM globals (Radix, useIsMobile's window.matchMedia, etc.) ----
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost/",
  pretendToBeVisual: true,
});
const g = globalThis as Record<string, unknown>;
const installGlobal = (name: string, value: unknown) => {
  try {
    g[name] = value;
  } catch {
    Object.defineProperty(globalThis, name, { value, configurable: true, writable: true });
  }
};
installGlobal("window", dom.window);
installGlobal("document", dom.window.document);
installGlobal("navigator", dom.window.navigator);
installGlobal("HTMLElement", dom.window.HTMLElement);
installGlobal("Element", dom.window.Element);
installGlobal("Node", dom.window.Node);
installGlobal("getComputedStyle", dom.window.getComputedStyle);
// useIsMobile reads window.innerWidth inside useEffect — but renderToStaticMarkup
// never runs effects, so the hook just returns its initial `false`. Desktop branch wins.

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const MEETINGS = [
  { n: 1, file: "src/components/presentation/meeting1/Meeting1PresentationShell.tsx" },
  { n: 2, file: "src/components/presentation/meeting2/Meeting2PresentationShell.tsx" },
  { n: 3, file: "src/components/presentation/meeting3/Meeting3PresentationShell.tsx" },
  { n: 4, file: "src/components/presentation/meeting4/Meeting4PresentationShell.tsx" },
  { n: 5, file: "src/components/presentation/meeting5/Meeting5PresentationShell.tsx" },
  { n: 6, file: "src/components/presentation/meeting6/Meeting6PresentationShell.tsx" },
  { n: 7, file: "src/components/presentation/meeting7/Meeting7PresentationShell.tsx" },
  { n: 8, file: "src/components/presentation/meeting8/Meeting8PresentationShell.tsx" },
  { n: 9, file: "src/components/presentation/meeting9/Meeting9PresentationShell.tsx" },
  { n: 10, file: "src/components/presentation/meeting10/Meeting10PresentationShell.tsx" },
  { n: 11, file: "src/components/presentation/meeting11/Meeting11PresentationShell.tsx" },
  { n: 12, file: "src/components/presentation/meeting12/Meeting12PresentationShell.tsx" },
];

const TOTAL_MEETINGS = 12;

type Shell = {
  slideNames: string[];
  TOTAL: number;
  getSlideContent: (index: number) => ReactElement | null;
};

function cleanSlideText(html: string): string {
  const text = htmlToText(html, {
    wordwrap: false,
    preserveNewlines: false,
    selectors: [
      { selector: "svg", format: "skip" },
      { selector: "img", format: "skip" },
      { selector: "a", options: { ignoreHref: true } },
      { selector: "h1", format: "block" },
      { selector: "h2", format: "block" },
      { selector: "h3", format: "block" },
      { selector: "h4", format: "block" },
      { selector: "h5", format: "block" },
      { selector: "h6", format: "block" },
      { selector: "ul", options: { itemPrefix: "* " } },
    ],
  });
  // html-to-text already collapses, but trim aggressive blank lines (>2 → 1).
  return text
    .split("\n")
    .map((line) => line.replace(/\s+$/g, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatSlide(args: {
  slideNumber: number;
  title: string;
  body: string;
  meetingN: number;
  total: number;
}): string {
  const { slideNumber, title, body, meetingN, total } = args;
  // Body may already start with the title text (e.g. h1 in JSX matches slideNames).
  // Keep the explicit **title** line either way — matches lesson1.txt format.
  const footer = `Михаэль · Встреча ${meetingN} из ${TOTAL_MEETINGS} · Slide ${slideNumber}/${total}`;
  return `## Слайд ${slideNumber}\n**${title}**\n${body}\n${footer}\n`;
}

async function renderMeeting(server: ViteDevServer, meeting: { n: number; file: string }) {
  const shell = (await server.ssrLoadModule(meeting.file)) as Shell;
  const { slideNames, getSlideContent, TOTAL } = shell;

  if (!Array.isArray(slideNames) || typeof getSlideContent !== "function" || typeof TOTAL !== "number") {
    throw new Error(
      `Meeting ${meeting.n} shell did not export expected symbols (slideNames/getSlideContent/TOTAL). Got: ${Object.keys(shell).join(", ")}`
    );
  }
  if (slideNames.length !== TOTAL) {
    console.warn(
      `[meeting${meeting.n}] slideNames.length=${slideNames.length} != TOTAL=${TOTAL} — using TOTAL as the loop bound, missing names will fall back to empty string.`
    );
  }

  const lines: string[] = [`# Встреча ${meeting.n} — The Founders Circle`, ""];

  for (let i = 0; i < TOTAL; i++) {
    const title = slideNames[i] ?? "";
    let body = "";
    try {
      const element = getSlideContent(i);
      if (element) {
        const html = renderToStaticMarkup(element);
        body = cleanSlideText(html);
      }
    } catch (err) {
      console.warn(`[meeting${meeting.n}] slide ${i + 1} render failed:`, err instanceof Error ? err.message : err);
    }
    lines.push(
      formatSlide({
        slideNumber: i + 1,
        title,
        body,
        meetingN: meeting.n,
        total: TOTAL,
      })
    );
  }

  const outPath = resolve(projectRoot, `public/programm-week${meeting.n}.txt`);
  writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`[meeting${meeting.n}] wrote ${outPath} (${TOTAL} slides)`);
}

async function main() {
  const server = await createServer({
    root: projectRoot,
    configFile: resolve(projectRoot, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "warn",
  });

  try {
    for (const meeting of MEETINGS) {
      await renderMeeting(server, meeting);
    }
  } finally {
    await server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
