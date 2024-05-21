import axios from "axios";
import { logout } from "../services/apiAuth";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      logout();
      localStorage.removeItem("userProfile");
      window.location.href = "/login";
    }
  }
);

export default axiosInstance;
