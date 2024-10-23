import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});
axiosInstance.interceptors.request.use(
  function (config) {
    const cookiStore = cookies();
    const accessToken = cookiStore.get("accessToken")?.value;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
