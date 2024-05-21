import { API_URL } from "../utils/constans";
import axiosInstance from "../utils/axiosInstance";

export type CreateTransactionType = {
  transaction_details: {
    product_id: string;
    quantity: number;
  }[];
};

export const apiTransactionHistory = async () => {
  const response = await axiosInstance.get(`${API_URL}/transaction-history`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const apiCreateNewTransaction = async (
  newTransaction: CreateTransactionType
) => {
  const response = await axiosInstance.post(
    `${API_URL}/transaction`,
    newTransaction,
    {
      withCredentials: true,
    }
  );

  return response.data.data;
};
