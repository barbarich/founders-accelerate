import Meeting4PresentationShell from "./Meeting4PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicMeeting4Shell() {
  return <Meeting4PresentationShell backTo="/program" />;
}
