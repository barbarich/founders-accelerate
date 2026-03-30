import Meeting3PresentationShell from "./Meeting3PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicMeeting3Shell() {
  return <Meeting3PresentationShell backTo="/program" />;
}
