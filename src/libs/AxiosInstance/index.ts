import axios from "axios";
import { cookies } from "next/headers";
// import type { AxiosInstance } from "axios";

const myInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://portfolio-server-beige-beta.vercel.app/api",
});
// Add a request interceptor
myInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
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
myInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default myInstance;
