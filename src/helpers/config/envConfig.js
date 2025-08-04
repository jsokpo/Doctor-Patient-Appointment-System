// envConfig.js
export const getBaseUrl = () => {
  return process.env.REACT_APP_API_BASE_URL || 'https://doctorpatientapi.onrender.com';
}

