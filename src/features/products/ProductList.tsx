import { useProducts } from "./useProducts";
import { CartStateType } from "../../redux/slices/cartSlice";

import ProductItem from "./ProductItem";

type ProductListType = {
  products: CartStateType[] | undefined;
  isLoading: boolean;
};

const ProductList = () => {
  const { products, isLoading }: ProductListType = useProducts();

  if (isLoading) {
    return <p>Loading</p>;
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
