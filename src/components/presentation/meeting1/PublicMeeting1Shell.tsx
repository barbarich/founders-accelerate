import Meeting1PresentationShell from "./Meeting1PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicMeeting1Shell() {
  return <Meeting1PresentationShell backTo="/program" />;
}
