import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <p className="mx-auto text-xl font-bold">Your Cart is Empty</p>
      <Link
        to="/"
        className="mx-auto text-xl text-[#219ebc] font-bold hover:underline"
      >
        Shop Now
      </Link>
    </>
  );
};

export default EmptyCart;
