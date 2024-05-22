import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BsCartPlus } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

import Loader from "../../components/Loader";
import Button from "../../components/Button";
import ButtonContainer from "../../components/ButtonContainer";
import { IMAGE_URL } from "../../utils/constans";
import { addToCart } from "../../redux/slices/cartSlice";
import { RootTypes } from "../../redux/store";
import { useSingleProduct } from "./useSingleProduct";
import { formatIDRCurrency } from "../../utils/formatCurrency";

const ProductDetail = () => {
  const { product, isLoading } = useSingleProduct();
  const { carts } = useSelector((state: RootTypes) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex mt-10 gap-5 border border-solid shadow-gray-300 shadow-sm">
      <figure className="w-1/2 flex justify-center items-center">
        <img
          src={`${IMAGE_URL}/${product?.image}`}
          alt={product?.name}
          className="w-[90%] h-[95%] rounded-md"
        />
      </figure>
      <div className="w-1/2 mt-10 px-10">
        <div className="flex items-center gap-3 mb-5 font-bold text-[#219ebc]">
          <Link to="/" className="hover:underline transition-all">
            Home
          </Link>
          <span>
            <FaGreaterThan size={15} />
          </span>
          <p className="">{product?.category.name}</p>
        </div>
        <h1 className="text-3xl font-bold mb-3">{product?.name}</h1>
        <p className="text-xl text-slate-600 font-semibold mb-5">
          {formatIDRCurrency(product?.price)}
        </p>
        <div className="w-11/12 mb-16">
          <p>{product?.description}</p>
        </div>
        <ButtonContainer width={400}>
          {carts.length < 1 ? (
            <Button
              variant="withIcon"
              color="#219ebc"
              onClick={handleAddToCart}
            >
              <span className="flex gap-3">
                <BsCartPlus size={25} />
                <span>Add To Cart</span>
              </span>
            </Button>
          ) : (
            <Button to="/carts" variant="withIcon" color="#219ebc">
              <MdOutlineShoppingCartCheckout size={25} />
              <span>Go to your cart</span>
            </Button>
          )}
        </ButtonContainer>
      </div>
    </div>
  );
};

export default ProductDetail;
