import { authKey } from "../constant/storageKey";

// --- Helpers ---
const isBrowser = () => typeof window !== "undefined";

// Save JWT
export const setUserInfo = ({ accessToken }) => {
  if (isBrowser() && accessToken) {
    try {
      window.localStorage.setItem(authKey, accessToken);
    } catch (err) {
      console.error("Failed to save token:", err);
    }
  }
};

// Get JWT
export const getAccessToken = () => {
  if (isBrowser()) {
    try {
      return window.localStorage.getItem(authKey) || null;
    } catch (err) {
      console.error("Failed to read token:", err);
      return null;
    }
  }
  return null;
};

// Check login
export const isLoggedIn = () => {
  return !!getAccessToken();
};

// Logout
export const loggedOut = () => {
  if (isBrowser()) {
    try {
      window.localStorage.removeItem(authKey);
    } catch (err) {
      console.error("Failed to remove token:", err);
    }
  }
};
