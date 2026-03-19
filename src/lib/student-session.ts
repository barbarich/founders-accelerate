const STORAGE_KEY = "student_session";

export interface StudentSession {
  participantId: string;
  email: string;
  cohortId: string;
  fullName: string | null;
}

export function getStudentSession(): StudentSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StudentSession;
  } catch {
    return null;
  }
}

export function setStudentSession(session: StudentSession): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearStudentSession(): void {
  localStorage.removeItem(STORAGE_KEY);
}
