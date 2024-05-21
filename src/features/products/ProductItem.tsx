import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { BsCartPlus } from "react-icons/bs";

import { IMAGE_URL } from "../../utils/constans";
import { formatIDRCurrency } from "../../utils/formatCurrency";
import { CartStateType, addToCart } from "../../redux/slices/cartSlice";

const ProductItem = (product: CartStateType) => {
  const { id, name, category, price, image } = product;
  const dispatch = useDispatch();

  // const originalUrl = image;
  // const newUrl = originalUrl.replace("images", "");

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-72 my-10 bg-white shadow-md rounded-xl duration-500 ">
      <div>
        <Link to={`product/${id}`}>
          <img
            src={`${IMAGE_URL}/${image}`}
            alt="Product"
            className="h-70 w-72 object-cover rounded-t-xl duration-150 hover:scale-105 hover:shadow-xl"
          />
        </Link>
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {category.name}
          </span>
          <p className="text-lg font-bold truncate block capitalize">{name}</p>
          <div className="flex items-center">
            <p className="text-sm font-semibold text-slate-600 cursor-auto my-3">
              {formatIDRCurrency(price)}
            </p>
            <button
              className="ml-auto bg-[#219ebc] py-[6px] px-4 text-white text-center font-semibold rounded-md cursor-pointer"
              onClick={handleAdd}
            >
              <span className="flex items-center gap-3">
                <BsCartPlus size={23} />
                <span className="text-sm">Add</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
