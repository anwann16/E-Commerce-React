import { useDispatch } from "react-redux";
import {
  CartStateType,
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/slices/cartSlice";
import { IMAGE_URL } from "../../utils/constans";
import { formatIDRCurrency } from "../../utils/formatCurrency";
import { IoMdClose } from "react-icons/io";

const CartItem = (item: CartStateType) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id));
  };
  const handleDeleteCart = () => {
    dispatch(deleteFromCart(item.id));
  };

  return (
    <div className="">
      <div className="w-2/3 mx-auto shadow-sm border border-solid my-5">
        <div className="flex gap-3 px-1">
          <figure className="w-[40%] p-1">
            <img
              src={`${IMAGE_URL}/${item.image}`}
              alt={item.name}
              className="object-cover rounded-md"
            />
          </figure>
          <div className="w-[40%] py-4">
            <p className="text-xl font-semibold mb-2">{item.name}</p>
            <p className="text-sm font-semibold text-slate-400">
              {item.category.name}
            </p>
            <p className="text-slate-600 font-semibold mb-3">
              Stock : {item.stock}
            </p>
            <p className="text-slate-600 font-semibold mb-3">
              {formatIDRCurrency(item.price)}
            </p>

            <div className="border w-[50%] flex mt-10 rounded-full bg-slate-100 group">
              <button
                className={`py-1 px-3 text-xl font-semibold ${
                  item.quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                onClick={handleDecrement}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <input
                type="number"
                className="w-12 py-1 outline-none text-center text-sm font-semibold bg-white"
                value={item.quantity}
                disabled
              />
              <button
                className={`py-1 px-3 text-xl font-semibold ${
                  item.quantity >= item.stock
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={handleIncrement}
                disabled={item.quantity >= item.stock}
              >
                +
              </button>
            </div>
          </div>
          <div className="ml-auto cursor-pointer" onClick={handleDeleteCart}>
            <IoMdClose size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
