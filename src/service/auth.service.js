import { authKey } from "../constant/storageKey";

// Run-time guards (never at module load)
const isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";

const storage = {
  get() {
    if (!isBrowser()) return null;
    try {
      // Prefer localStorage
      const v = window.localStorage.getItem(authKey);
      if (v) return v;
    } catch {}
    // Fallback to cookie (still client-only)
    try {
      const m = document.cookie.match(new RegExp(`(?:^|; )${authKey}=([^;]*)`));
      return m ? decodeURIComponent(m[1]) : null;
    } catch {}
    return null;
  },
  set(token, { persist = true, days = 7 } = {}) {
    if (!isBrowser() || !token) return;
    try {
      if (persist) window.localStorage.setItem(authKey, token);
      else window.sessionStorage.setItem(authKey, token);
    } catch {}
    // Also set a lax cookie as a soft fallback for client navigations
    try {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${authKey}=${encodeURIComponent(token)}; path=/; expires=${expires}; SameSite=Lax`;
    } catch {}
  },
  remove() {
    if (!isBrowser()) return;
    try { window.localStorage.removeItem(authKey); } catch {}
    try { window.sessionStorage.removeItem(authKey); } catch {}
    try { document.cookie = `${authKey}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax`; } catch {}
  }
};

export const setUserInfo = ({ accessToken, persist = true } = {}) => {
  storage.set(accessToken, { persist });
};

export const getAccessToken = () => storage.get();

export const isLoggedIn = () => !!storage.get();

export const loggedOut = () => storage.remove();

// Optional: decode payload (client-only)
export const getUserInfo = () => {
  if (!isBrowser()) return null;
  const token = storage.get();
  if (!token) return null;
  try {
    const base64 = token.split(".")[1];
    return base64 ? JSON.parse(window.atob(base64)) : null;
  } catch {
    return null;
  }
};
