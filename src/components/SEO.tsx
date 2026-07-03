import { Helmet } from "react-helmet-async";

const SITE = "https://founders-circle.space";

type AlternateLang = { lang: string; path: string };

type Props = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  canonical?: string;
  alternates?: AlternateLang[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

export function SEO({
  title,
  description,
  path,
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
  alternates,
  jsonLd,
  noindex,
}: Props) {
  const url = canonical ?? `${SITE}${path}`;
  const fullOg = ogImage.startsWith("http") ? ogImage : `${SITE}${ogImage}`;
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOg} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOg} />

      {alternates?.map((a) => (
        <link
          key={a.lang}
          rel="alternate"
          hrefLang={a.lang}
          href={`${SITE}${a.path}`}
        />
      ))}

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}

export const langAlternates = (
  basePath: (lang: string) => string,
  langs: string[] = ["ru", "en", "he"],
  defaultLang = "ru",
): AlternateLang[] => [
  ...langs.map((lang) => ({ lang, path: basePath(lang) })),
  { lang: "x-default", path: basePath(defaultLang) },
];

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Founders Circle",
  url: SITE,
  logo: `${SITE}/og-image.jpg`,
  email: "hello@founders-circle.space",
  founder: {
    "@type": "Person",
    name: "Michael Barbarich",
    url: "https://www.linkedin.com/in/michael-barbarich",
    jobTitle: "Founder, Mentor",
  },
  sameAs: ["https://www.linkedin.com/in/michael-barbarich"],
};

export const PERSON_MICHAEL_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Barbarich",
  alternateName: "Михаэль Барбарич",
  url: `${SITE}/ru/mentor`,
  jobTitle: "Serial Founder, Mentor, CEO MetaMinder",
  description:
    "Serial entrepreneur from Tel Aviv, 16 years in product, 2 exits. CEO MetaMinder, solo-founder Mikey AI. Built RunEverywhere with 50,000+ paying users in 107 countries.",
  sameAs: ["https://www.linkedin.com/in/michael-barbarich"],
  worksFor: {
    "@type": "Organization",
    name: "The Founders Circle",
    url: SITE,
  },
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});
