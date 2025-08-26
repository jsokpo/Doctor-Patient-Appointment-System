// src/redux/api/appointmentApi.js
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const APPT_URL = "/appointment";

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // ✅ Fetch all appointments
    getAppointments: build.query({
      query: (arg) => ({
        url: `${APPT_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response) => ({
        appointments: response.data,
        meta: response.meta,
      }),
      providesTags: [tagTypes.appointment],
    }),

    // ✅ Fetch a single appointment
    getAppointment: build.query({
      query: (id) => ({
        url: `${APPT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.appointment],
    }),

    // ✅ Create appointment
    createAppointment: build.mutation({
      query: (data) => ({
        url: `${APPT_URL}`,
        method: "POST",
        body: data, // FIX: use body (works for JSON or FormData)
      }),
      invalidatesTags: [tagTypes.appointment],
    }),

    // ✅ Update appointment
    updateAppointment: build.mutation({
      query: ({ id, data }) => ({
        url: `${APPT_URL}/${id}`,
        method: "PATCH",
        body: data, // FIX: body not data
      }),
      invalidatesTags: [tagTypes.appointment],
    }),

    // ✅ Delete appointment
    deleteAppointment: build.mutation({
      query: (id) => ({
        url: `${APPT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.appointment],
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
