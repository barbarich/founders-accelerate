import Lesson6PresentationShell from "./Lesson6PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicLesson6Shell() {
  return <Lesson6PresentationShell backTo="/program" />;
}
