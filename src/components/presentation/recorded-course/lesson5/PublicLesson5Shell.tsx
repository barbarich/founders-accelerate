import Lesson5PresentationShell from "./Lesson5PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicLesson5Shell() {
  return <Lesson5PresentationShell backTo="/program" />;
}
