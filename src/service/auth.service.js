import { authKey } from "../constant/storageKey";

// Save JWT
export const setUserInfo = ({ accessToken }) => {
  try {
    if (typeof window !== "undefined" && accessToken) {
      window.localStorage.setItem(authKey, accessToken);
    }
  } catch (err) {
    console.warn("localStorage not available (SSR or restricted)", err);
  }
};

// Get JWT
export const getAccessToken = () => {
  try {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(authKey) || null;
    }
  } catch (err) {
    console.warn("localStorage not available (SSR or restricted)", err);
  }
  return null;
};

// Check login
export const isLoggedIn = () => {
  return !!getAccessToken();
};

// Logout
export const loggedOut = () => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(authKey);
    }
  } catch (err) {
    console.warn("localStorage not available (SSR or restricted)", err);
  }
};
