import { setUserInfo } from "../../utils/local-storage";
import { baseApi, prepareError } from "./baseApi";

const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        body: loginData,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = (await queryFulfilled).data;
          setUserInfo({ accessToken: result.accessToken });
        } catch (error) {
          console.error("Login failed:", prepareError(error));
        }
      },
    }),
    patientSignUp: build.mutation({
      query: (data) => ({
        url: `/patient`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response, meta, arg) => prepareError(response),
    }),
    doctorSignUp: build.mutation({
      query: (data) => ({
        url: `/doctor`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response, meta, arg) => prepareError(response),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response, meta, arg) => prepareError(response),
    }),
    resetConfirm: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password/confirm`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response, meta, arg) => prepareError(response),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useDoctorSignUpMutation,
  usePatientSignUpMutation,
  useResetPasswordMutation,
  useResetConfirmMutation
} = authApi;
