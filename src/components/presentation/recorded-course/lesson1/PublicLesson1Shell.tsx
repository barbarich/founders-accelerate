import Lesson1PresentationShell from "./Lesson1PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicLesson1Shell() {
  return <Lesson1PresentationShell backTo="/program" />;
}
