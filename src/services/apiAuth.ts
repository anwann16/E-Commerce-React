import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../utils/constans";
import axiosInstance from "../utils/axiosInstance";

export type LoginType = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginType) => {
  try {
    const data = await axios.post(
      `${API_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.error);
    }

    throw new Error("Error");
  }
};

export const logout = async () => {
  await axios.get(`${API_URL}/auth/logout`);
};

export const currentUser = async () => {
  const data = await axiosInstance.get(`${API_URL}/me`, {
    withCredentials: true,
  });
  return data;
};
