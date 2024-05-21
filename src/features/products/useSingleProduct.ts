import { useQuery } from "@tanstack/react-query";
import { getDetailProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export const useSingleProduct = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getDetailProduct(id),
  });

  return { isLoading, error, product };
};
