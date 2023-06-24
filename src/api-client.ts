import axios from "axios";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/`,
});

// Intercet request to add authorization token in header before request send
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Intercet response to handle the errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      // TODO: Use more sophisticated error handling
      console.log(response);
    } else if (response.status === 404) {
      // TODO: Use more sophisticated error handling
      console.log(response);
    }

    throw error;
  }
);

export default apiClient;
