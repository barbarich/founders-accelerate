import Meeting5PresentationShell from "./Meeting5PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicMeeting5Shell() {
  return <Meeting5PresentationShell backTo="/program" />;
}
