import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "../utils/local-storage";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthservicebackend.onrender.com/api/v1",
    prepareHeaders: (headers) => {
      // Ensure we are in the browser
      if (typeof window !== "undefined") {
        const token = getFromLocalStorage("authKey");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  tagTypes: ["doctor"],
  endpoints: () => ({}),
});
