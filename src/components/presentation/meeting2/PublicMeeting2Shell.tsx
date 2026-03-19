import Meeting2PresentationShell from "./Meeting2PresentationShell";

/**
 * Public wrapper — no auth guard, back button goes to /program instead of admin.
 */
export default function PublicMeeting2Shell() {
  return <Meeting2PresentationShell backTo="/program" />;
}
