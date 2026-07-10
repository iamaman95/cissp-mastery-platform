import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

// MVP auth: single hardcoded credential + simulated OTP. Session in localStorage.
// Documented for the user so the demo login is discoverable.
export const DEMO_USERNAME = 'student';
export const DEMO_PASSWORD = 'CERTsecure@2026';
export const DEMO_OTP = '123456';

export interface AuthUser {
  username: string;
  displayName: string;
  enrolled: string[]; // course ids
}

interface AuthState {
  user: AuthUser | null;
  isAuthed: boolean;
  /** Step 1: validate username + password. Returns true if OTP step should follow. */
  verifyCredentials: (username: string, password: string) => boolean;
  /** Step 2: validate OTP and establish the session. */
  verifyOtp: (otp: string) => boolean;
  logout: () => void;
  enroll: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
}

const STORAGE_KEY = 'certsecure-session-v1';
const AuthCtx = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  // holds a pending user between the password step and the OTP step
  const [pending, setPending] = useState<AuthUser | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  function persist(u: AuthUser | null) {
    setUser(u);
    if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    else localStorage.removeItem(STORAGE_KEY);
  }

  const value = useMemo<AuthState>(
    () => ({
      user,
      isAuthed: !!user,
      verifyCredentials(username, password) {
        if (username.trim().toLowerCase() === DEMO_USERNAME && password === DEMO_PASSWORD) {
          const existing = (() => {
            try {
              const raw = localStorage.getItem(STORAGE_KEY);
              return raw ? (JSON.parse(raw) as AuthUser) : null;
            } catch {
              return null;
            }
          })();
          setPending({ username: DEMO_USERNAME, displayName: 'Student', enrolled: existing?.enrolled ?? [] });
          return true;
        }
        return false;
      },
      verifyOtp(otp) {
        if (otp.trim() === DEMO_OTP && pending) {
          persist(pending);
          setPending(null);
          return true;
        }
        return false;
      },
      logout() {
        persist(null);
        setPending(null);
      },
      enroll(courseId) {
        if (!user) return;
        if (user.enrolled.includes(courseId)) return;
        persist({ ...user, enrolled: [...user.enrolled, courseId] });
      },
      isEnrolled(courseId) {
        return !!user?.enrolled.includes(courseId);
      },
    }),
    [user, pending]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
