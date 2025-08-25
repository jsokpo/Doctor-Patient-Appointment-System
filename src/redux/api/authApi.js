import { setUserInfo } from "../../utils/local-storage";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData, // ✅ correct for RTK Query
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = (await queryFulfilled).data;

          // Save token + role/user info
          setUserInfo({
            accessToken: result.accessToken,
            role: result.role,
            userId: result.userId,
          });

          // ✅ Redirect after success (role based if needed)
          if (result.role === "patient") {
            window.location.href = "/patient/dashboard";
          } else if (result.role === "doctor") {
            window.location.href = "/doctor/dashboard";
          } else {
            window.location.href = "/dashboard";
          }
        } catch (error) {
          console.error("Login failed", error);
        }
      },
    }),

    patientSignUp: build.mutation({
      query: (data) => ({
        url: `/patient`,
        method: "POST",
        body: data,
      }),
    }),

    doctorSignUp: build.mutation({
      query: (data) => ({
        url: `/doctor`,
        method: "POST",
        body: data,
      }),
    }),

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
