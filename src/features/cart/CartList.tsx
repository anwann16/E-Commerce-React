import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

import { RootTypes } from "../../redux/store";
import { formatIDRCurrency } from "../../utils/formatCurrency";
import { useCreateTransaction } from "../transaction/useCreateTransaction";
import { CreateTransactionType } from "../../services/apiTransaction";
import { emptyCart } from "../../redux/slices/cartSlice";

const CartList = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [transactionRequest, setTransactionRequest] =
    useState<CreateTransactionType>({ transaction_details: [] });
  const { carts } = useSelector((state: RootTypes) => state.cart);
  const { createTransaction, isCreateTransaction } = useCreateTransaction();
  const dispatch = useDispatch();

  useEffect(() => {
    const total = carts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);

    const trxData = carts.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));
    setTransactionRequest({ transaction_details: trxData });
  }, [carts]);

  const handleCreateTransaction = () => {
    if (!isCreateTransaction) {
      createTransaction(transactionRequest);
      dispatch(emptyCart());
    }
  };

  return (
    <div className="flex justify-center flex-col w-3/4 mx-auto mt-10 py-10 border border-solid">
      <h1 className="mx-auto my-7 text-4xl font-bold">Your Shooping Cart </h1>
      {carts.length > 0 &&
        carts.map((item) => <CartItem key={item.id} {...item} />)}

      {carts.length > 0 ? (
        <>
          <div className="flex items-center justify-between w-2/3 mx-auto">
            <p className="text-xl font-bold">Total Amount:</p>
            <p className="text-lg font-semibold">
              {formatIDRCurrency(totalAmount)}
            </p>
          </div>
          <div className="flex items-center justify-center w-2/3 mx-auto mt-5">
            <Button
              onClick={handleCreateTransaction}
              variant="withIcon"
              color="#219ebc"
              type="submit"
              disabled={isCreateTransaction}
            >
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartList;
