import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUserInfo } from "../service/auth.service"; 

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://healthservicebackend.onrender.com/api/v1",
    prepareHeaders: (headers) => {
      const user = getUserInfo(); // this reads token from localStorage and decodes it
      if (user) {
        const token = getFromLocalStorage("authKey"); // raw JWT, not decoded payload
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["doctor"],
  endpoints: () => ({}),
});
