import Lesson4PresentationShell from "./Lesson4PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicLesson4Shell() {
  return <Lesson4PresentationShell backTo="/program" />;
}
