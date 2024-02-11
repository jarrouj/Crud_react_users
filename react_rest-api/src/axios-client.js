import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => { // Include 'config' as an argument
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response && response.status === 401) { // Check if 'response' exists
        localStorage.removeItem('ACCESS_TOKEN');
      }
    } catch (e) {
      console.log(e);
    }
    throw error;
  }
);

export default axiosClient;
