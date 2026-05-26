import Lesson2PresentationShell from "./Lesson2PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicLesson2Shell() {
  return <Lesson2PresentationShell backTo="/program" />;
}
