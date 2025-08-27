import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './tag-types';

const BASE_URL = 'https://healthservicebackend.onrender.com/api/v1';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      try {
        const token =
          getState()?.auth?.token ||
          (typeof window !== 'undefined' && localStorage.getItem('token'));

        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      } catch (err) {
        console.warn('Token attach skipped:', err);
      }
      return headers;
    },
  }),
  tagTypes: Object.values(tagTypes),
  endpoints: () => ({}),
});
