import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../services/apiProducts";

export const useProducts = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  return { isLoading, error, products };
};
