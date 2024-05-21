import { useMutation } from "@tanstack/react-query";
import {
  CreateTransactionType,
  apiCreateNewTransaction,
} from "../../services/apiTransaction";

export const useCreateTransaction = () => {
  const { mutate: createTransaction, isLoading: isCreateTransaction } =
    useMutation({
      mutationFn: (newTransaction: CreateTransactionType) =>
        apiCreateNewTransaction(newTransaction),
      onSuccess: () => {
        console.log("Create Success");
      },
    });

  return { createTransaction, isCreateTransaction };
};
