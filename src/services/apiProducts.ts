import axios from "axios";

import { API_URL } from "../utils/constans";
import { CartStateType } from "../redux/slices/cartSlice";
import axiosInstance from "../utils/axiosInstance";

export const fetchAllProducts = async (
  search: string
): Promise<CartStateType[]> => {
  const response = await axios.get(`${API_URL}/products`, {
    params: {
      search: search,
    },
  });
  return response.data.data;
};

export const getDetailProduct = async (
  id: string | undefined
): Promise<CartStateType> => {
  const response = await axiosInstance.get(`${API_URL}/product/${id}`, {
    withCredentials: true,
  });
  return response.data.data;
};
