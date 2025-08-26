import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PAT_URL = '/patient';

export const patientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get single patient
    getPatient: build.query({
      query: (id) => ({
        url: `${PAT_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.patient],
    }),

    // Update patient
    updatePatient: build.mutation({
      query: ({ id, data }) => ({
        url: `${PAT_URL}/${id}`,
        method: 'PATCH',
        body: data, // ✅ must use "body"
        // ❌ don’t manually set multipart headers
      }),
      invalidatesTags: [tagTypes.patient],
    }),
  }),
});

export const { useGetPatientQuery, useUpdatePatientMutation } = patientApi;
