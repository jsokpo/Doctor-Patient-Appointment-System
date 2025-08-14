import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DOC_URL = "/doctor"; // change to "/doctors" if your backend uses plural

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query<
      { doctors: any[]; meta?: any },
      Record<string, any> | void
    >({
      query: (params) => ({
        url: DOC_URL,
        method: "GET",
        params,
      }),
      transformResponse: (response: any) => {
        // Support both { data, meta } and raw array responses
        const doctors = Array.isArray(response) ? response : response?.data ?? [];
        const meta = response?.meta;
        return { doctors, meta };
      },
      providesTags: (result) =>
        result?.doctors
          ? [
              ...result.doctors.map((d: any) => ({
                type: tagTypes.doctor,
                id: d.id ?? d._id,
              })),
              { type: tagTypes.doctor, id: "LIST" },
            ]
          : [{ type: tagTypes.doctor, id: "LIST" }],
    }),

    getDoctor: build.query<any, string | number>({
      query: (id) => ({
        url: `${DOC_URL}/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: tagTypes.doctor, id }],
    }),

    updateDoctor: build.mutation<
      any,
      { id: string | number; data: FormData | Record<string, any> }
    >({
      query: ({ id, data }) => {
        const isFormData =
          typeof FormData !== "undefined" && data instanceof FormData;

        return {
          url: `${DOC_URL}/${id}`,
          method: "PATCH",
          // IMPORTANT: use `body`, not `data`
          body: isFormData ? data : JSON.stringify(data),
          // Do NOT set multipart header manually; only set JSON header when not FormData
          headers: isFormData ? undefined : { "Content-Type": "application/json" },
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: tagTypes.doctor, id },
        { type: tagTypes.doctor, id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDoctorsQuery,
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} = doctorApi;
