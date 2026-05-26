import Lesson3PresentationShell from "./Lesson3PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicLesson3Shell() {
  return <Lesson3PresentationShell backTo="/program" />;
}
