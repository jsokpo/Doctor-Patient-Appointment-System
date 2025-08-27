// redux/api/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "../../service/auth.service";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthservicebackend.onrender.com/api/v1",
    prepareHeaders: (headers) => {
      // Runs at request time (client after hydration)
      const token = getAccessToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["doctor", "appointments", "patients"],
  endpoints: () => ({}),
});
