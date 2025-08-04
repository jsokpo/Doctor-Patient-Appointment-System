// envConfig.js
export const getBaseUrl = () => {
  return process.env.REACT_APP_API_URL || 'https://doctorpatientapi.onrender.com/api/v1';
}

