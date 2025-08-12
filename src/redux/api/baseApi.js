import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Helper: normalize error object
const prepareError = (error) => {
  if (error?.data?.message) return { message: error.data.message };
  if (error?.error) return { message: error.error };
  return { message: 'Unexpected error occurred' };
};

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
  // Global error formatter for RTK Query
  // Note: This is not built-in RTK Query, so we'll wrap each endpoint manually instead
});

export { prepareError };
