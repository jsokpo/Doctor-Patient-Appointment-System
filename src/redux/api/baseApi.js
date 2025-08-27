import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './tag-types';

const BASE_URL = 'https://healthservicebackend.onrender.com/api/v1';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include', // only if your backend uses cookies
    prepareHeaders: (headers, { getState }) => {
      // Attach JWT if it exists in Redux state
      const token = getState().auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    tagTypes.appointments,
    tagTypes.users,
    tagTypes.doctors,
    tagTypes.patients,
    tagTypes.reviews,
    tagTypes.blogs,
    tagTypes.medicines,
  ],
  endpoints: () => ({}),
});
