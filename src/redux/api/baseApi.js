import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './tag-types';

const BASE_URL = 'https://healthservicebackend.onrender.com/api/v1';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Always guard against SSR environment (no window/localStorage)
      let token = null;

      try {
        token = getState()?.auth?.token;
      } catch {
        token = null;
      }

      // If Redux has no token, check client-side localStorage safely
      if (!token && typeof window !== 'undefined') {
        token = localStorage.getItem('token');
      }

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: Object.values(tagTypes),
  endpoints: () => ({}),
});
