// src/service/auth.service.js
import { authKey } from "../constant/storageKey";

// Save token safely
export const setUserInfo = ({ accessToken }) => {
  if (typeof window !== "undefined" && accessToken) {
    try {
      localStorage.setItem(authKey, accessToken);
    } catch (e) {
      console.error("Failed to save token:", e);
    }
  }
};

// Get raw JWT (for Authorization header)
export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    try {
      return localStorage.getItem(authKey);
    } catch (e) {
      console.error("Failed to read token:", e);
      return null;
    }
  }
  return null; // 🚨 safe fallback during build/server
};

// Clear token
export const clearUserInfo = () => {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(authKey);
    } catch (e) {
      console.error("Failed to clear token:", e);
    }
  }
};
