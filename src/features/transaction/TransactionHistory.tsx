import Loader from "../../components/Loader";
import { IMAGE_URL } from "../../utils/constans";
import { formatIDRCurrency } from "../../utils/formatCurrency";
import { useTransactionHistory } from "./useTransactionHistory";

type TrxDetails = {
  id: string;
  price: number;
  quantity: number;
  product: {
    name: string;
    image: string;
  };
};

type TransactionsType = {
  id: string;
  total_amount: number;
  transaction_date: string;
  transaction_details: TrxDetails[];
};

const TransactionHistory = () => {
  const { transactionHistory, isLoading } = useTransactionHistory();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col w-11/12 border border-solid mx-auto mt-10 px-10">
      <h1 className="mt-20 text-3xl font-bold px-24">Your Transactions</h1>

      {transactionHistory.transactions.length > 0 ? (
        transactionHistory.transactions?.map(
          (transaction: TransactionsType) => (
            <div key={transaction.id} className="transaction">
              <div className="flex flex-col gap-2 px-24 mt-10 mb-5">
                <div className="flex items-center gap-5 font-medium">
                  <h2>{transaction.id}</h2>
                  <p className="text-slate-700 font-medium">
                    {new Date(transaction.transaction_date).toLocaleString()}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  Total Amount: {formatIDRCurrency(transaction.total_amount)}
                </p>
              </div>

              <div className="flex flex-col gap-10 px-24">
                {transaction.transaction_details.map((detail: TrxDetails) => (
                  <div
                    className="border-y-2 py-10 border-solid"
                    key={detail.id}
                  >
                    <div key={detail.id} className="flex gap-5">
                      <figure className="w-48 h-48 rounded-md">
                        <img
                          src={`${IMAGE_URL}/${detail.product.image}`}
                          alt={detail.product.name}
                          className="bg-cover rounded-md"
                        />
                      </figure>
                      <div className="flex flex-col gap-3 px-5 py-3">
                        <h3 className="text-xl font-semibold">
                          {detail.product.name}
                        </h3>
                        <p className="text-base text-gray-500 font-semibold">
                          {formatIDRCurrency(detail.price)}
                        </p>
                        <p className="text-base text-gray-500 font-semibold">
                          Qty: {detail.quantity}x
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )
      ) : (
        <p className="px-24 py-10 ">No Transaction Found</p>
      )}
    </div>
  );
};

export default TransactionHistory;
