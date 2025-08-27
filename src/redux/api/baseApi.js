import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './tag-types';

const BASE_URL = 'https://healthservicebackend.onrender.com/api/v1';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      try {
        // Safely read token from Redux state or localStorage
        const token = getState()?.auth?.token || localStorage.getItem("token");
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      } catch (err) {
        // Avoid errors during SSR / build
        console.warn("Token attach skipped:", err);
      }
      return headers;
    },
  }),
  tagTypes: Object.values(tagTypes), // ✅ make sure tagTypes is an object
  endpoints: () => ({}),
});
