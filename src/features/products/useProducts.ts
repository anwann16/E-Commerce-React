import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../services/apiProducts";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";

export const useProducts = (search: string) => {
  const [debouncedValue] = useDebounce(search, 500);

  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchAllProducts(debouncedValue),
  });

  useEffect(() => {
    refetch();
  }, [debouncedValue, refetch]);

  return { isLoading, error, products };
};
