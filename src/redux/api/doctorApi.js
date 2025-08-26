import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DOC_URL = '/api/v1/doctor'; // adjust if needed

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Fetch all doctors
    getDoctors: build.query({
      query: (params) => ({
        url: DOC_URL,
        method: 'GET',
        params,
      }),
      transformResponse: (response) => response?.data || [],
      providesTags: [tagTypes.doctor],
    }),

    // Fetch single doctor
    getDoctor: build.query({
      query: (id) => ({
        url: `${DOC_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.doctor],
    }),

    // Update doctor details
    updateDoctor: build.mutation({
      query: ({ id, data }) => ({
        url: `${DOC_URL}/${id}`,
        method: 'PATCH',
        body: data, // FormData or JSON
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} = doctorApi;
