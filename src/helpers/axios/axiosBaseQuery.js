import { instance } from './axiosInstance';

// Replace this with your actual Render backend URL
const renderBaseUrl = 'https://healthservicebackend.onrender.com';

export const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: renderBaseUrl }) =>
        async ({ url, method, data, params, headers }) => {
            try {
                const result = await instance({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers: headers
                });
                return result;
            } catch (axiosError) {
                const err = axiosError;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                };
            }
        };
