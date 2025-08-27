import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthservicebackend.onrender.com/api/v1",
    prepareHeaders: (headers) => {
      let token = null;

      // Guard for client-side execution only
      if (typeof window !== "undefined") {
        try {
          token = localStorage.getItem("authKey"); // direct safe access
        } catch (e) {
          console.warn("localStorage not available:", e);
        }
      }

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["doctor"],
  endpoints: () => ({}),
});
