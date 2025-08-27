import { authKey } from "../constant/storageKey";

// Save token safely
export const setUserInfo = ({ accessToken }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(authKey, accessToken);
  }
};

// Get raw JWT (for Authorization header)
export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(authKey) || null;
  }
  return null;
};

// Check login state
export const isLoggedIn = () => !!getAccessToken();

// Logout
export const loggedOut = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(authKey);
  }
};
