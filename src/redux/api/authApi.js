// src/redux/api/authApi.js
import { setUserInfo } from "../../utils/local-storage";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Login
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData, // ✅ if using fetchBaseQuery
        // data: loginData, // ❌ only if using axiosBaseQuery
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data: result } = await queryFulfilled;

          // ✅ Adjust keys to match your backend response
          setUserInfo({
            accessToken: result?.accessToken || result?.token,
            role: result?.role,
            userId: result?.userId || result?.user?.id,
          });
        } catch (err) {
          console.error("Login failed", err);
        }
      },
    }),

    // Patient signup
    patientSignUp: build.mutation({
      query: (data) => ({
        url: `/patient`,
        method: "POST",
        body: data,
      }),
    }),

    // Doctor signup
    doctorSignUp: build.mutation({
      query: (data) => ({
        url: `/doctor`,
        method: "POST",
        body: data,
      }),
    }),

    // Reset password
    resetPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        body: data,
      }),
    }),

    resetConfirm: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password/confirm`,
        method: "POST",
        body: data,
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
