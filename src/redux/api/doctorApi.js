import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DOC_URL = '/doctor';

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Fetch all doctors
    getDoctors: build.query({
      query: (params) => ({
        url: DOC_URL,
        method: 'GET',
        params, // fetchBaseQuery will handle this as query params
      }),
      transformResponse: (response) => {
        // Adjust to match backend response structure
        return {
          doctors: response?.data || [],
          meta: response?.meta || {}
        };
      },
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
        body: data, // ✅ fetchBaseQuery uses body, not data
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
