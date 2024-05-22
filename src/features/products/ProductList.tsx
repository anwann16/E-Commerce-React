import { useProducts } from "./useProducts";
import { CartStateType } from "../../redux/slices/cartSlice";

import ProductItem from "./ProductItem";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader";

type ProductListType = {
  products: CartStateType[] | undefined;
  isLoading: boolean;
};

const ProductList = () => {
  const { search } = useAuth();
  const { products, isLoading }: ProductListType = useProducts(search);

  if (isLoading) {
    return <Loader />;
  }

  if (products?.length === 0) {
    return (
      <p className="text-center text-xl font-medium my-20">Product Not Found</p>
    );
  }
  return (
    <section className="grid grid-cols-4">
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductList;
