// src/redux/api/patientApi.js
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PATIENT_URL = "/patient";

export const patientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // ✅ Fetch all patients
    getPatients: build.query({
      query: (arg) => ({
        url: `${PATIENT_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response) => ({
        patients: response.data,
        meta: response.meta,
      }),
      providesTags: [tagTypes.patient],
    }),

    // ✅ Fetch a single patient
    getPatient: build.query({
      query: (id) => ({
        url: `${PATIENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.patient],
    }),

    // ✅ Create patient
    createPatient: build.mutation({
      query: (data) => ({
        url: `${PATIENT_URL}`,
        method: "POST",
        body: data, // works for JSON or FormData
      }),
      invalidatesTags: [tagTypes.patient],
    }),

    // ✅ Update patient
    updatePatient: build.mutation({
      query: ({ id, data }) => ({
        url: `${PATIENT_URL}/${id}`,
        method: "PATCH",
        body: data, // FIXED (no manual Content-Type needed)
      }),
      invalidatesTags: [tagTypes.patient],
    }),

    // ✅ Delete patient
    deletePatient: build.mutation({
      query: (id) => ({
        url: `${PATIENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.patient],
    }),
  }),
});

export const {
  useGetPatientsQuery,
  useGetPatientQuery,
  useCreatePatientMutation,
  useUpdatePatientMutation,
  useDeletePatientMutation,
} = patientApi;
