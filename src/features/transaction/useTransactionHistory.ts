import { useQuery } from "@tanstack/react-query";
import { apiTransactionHistory } from "../../services/apiTransaction";

export const useTransactionHistory = () => {
  const {
    data: transactionHistory,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transaction history"],
    queryFn: apiTransactionHistory,
  });

  return { transactionHistory, isLoading, error };
};
