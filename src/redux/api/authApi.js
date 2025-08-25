// src/redux/api/authApi.js (or .ts)
import { setUserInfo } from "../../utils/local-storage";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData, // ✅ fetchBaseQuery: use `body`
        // If your baseApi uses Axios, swap to:
        // data: loginData,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data: result } = await queryFulfilled;
          // store token/role for later use
          setUserInfo({
            accessToken: result?.accessToken,
            role: result?.role,
            userId: result?.userId,
          });
        } catch (err) {
          console.error("Login failed", err);
        }
      },
    }),

    patientSignUp: build.mutation({
      query: (data) => ({
        url: `/patient`,
        method: "POST",
        body: data, // or `data` if Axios baseQuery
      }),
    }),

    doctorSignUp: build.mutation({
      query: (data) => ({
        url: `/doctor`,
        method: "POST",
        body: data, // or `data` if Axios baseQuery
      }),
    }),

    resetPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        body: data, // or `data` if Axios baseQuery
      }),
    }),

    resetConfirm: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password/confirm`,
        method: "POST",
        body: data, // or `data` if Axios baseQuery
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useDoctorSignUpMutation,
  usePatientSignUpMutation,
  useResetPasswordMutation,
  useResetConfirmMutation,
} = authApi;
