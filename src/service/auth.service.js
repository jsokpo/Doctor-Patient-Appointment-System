// src/service/auth.service.js
import { authKey } from "../constant/storageKey";

/**
 * Runtime check for browser environment.
 * Must be used inside functions (not at module load) so builds on Vercel/Node don't crash.
 */
const isBrowser = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

const KEY = authKey || "accessToken";

const storage = {
  get() {
    if (!isBrowser()) return null;

    try {
      // Prefer localStorage
      const v = window.localStorage.getItem(KEY);
      if (v) return v;
    } catch (e) {
      // ignore, fallback below
    }

    try {
      // Then sessionStorage
      const sv = window.sessionStorage.getItem(KEY);
      if (sv) return sv;
    } catch (e) {
      // ignore, fallback below
    }

    try {
      // Finally try cookie fallback
      const m = document.cookie.match(new RegExp(`(?:^|; )${KEY}=([^;]*)`));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) {
      return null;
    }
  },

  set(token, { persist = true, days = 7 } = {}) {
    if (!isBrowser() || !token) return;
    try {
      if (persist) {
        window.localStorage.setItem(KEY, token);
      } else {
        window.sessionStorage.setItem(KEY, token);
      }
    } catch (e) {
      // ignore - storage might be blocked
    }

    // Always set a cookie fallback so client navigations can still pick it up
    try {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${KEY}=${encodeURIComponent(token)}; path=/; expires=${expires}; SameSite=Lax`;
    } catch (e) {
      // ignore
    }
  },

  remove() {
    if (!isBrowser()) return;
    try {
      window.localStorage.removeItem(KEY);
    } catch (e) {}
    try {
      window.sessionStorage.removeItem(KEY);
    } catch (e) {}
    try {
      document.cookie = `${KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax`;
    } catch (e) {}
  },
};

/* Public API */

// Save token. `persist = true` uses localStorage, otherwise sessionStorage.
export const setUserInfo = ({ accessToken, persist = true } = {}) => {
  storage.set(accessToken, { persist });
};

// Retrieve raw JWT (string) or null
export const getAccessToken = () => storage.get();

// True if token exists (not checking expiry)
export const isLoggedIn = () => !!storage.get();

// Remove token from all client stores
export const clearUserInfo = () => storage.remove();

// Decode JWT payload (client-only). Returns null if no token or invalid.
export const getUserInfo = () => {
  if (!isBrowser()) return null;
  const token = storage.get();
  if (!token) return null;
  try {
    const base64 = token.split(".")[1];
    if (!base64) return null;
    // atob is available in browser
    const json = decodeURIComponent(
      Array.prototype.map
        .call(window.atob(base64), (c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(json);
  } catch (e) {
    // invalid token
    return null;
  }
};
