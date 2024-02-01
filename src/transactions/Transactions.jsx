import { useGlobalContext } from "../context/globalContext";

function Transactions() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div className="flex flex-col gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 p-4">Recent Transactions</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        const isExpense = type === "expense";
        const amountColor = isExpense ? "text-red-600" : "text-green-600";

        return (
          <div
            key={_id}
            className={`history-item bg-FCF6F9 border-2 border-grey shadow-md p-4 rounded-2xl flex justify-between items-center space-x-4`}
          >
            <p className={`text-base font-medium ${amountColor}`}>{title}</p>
            <p className={`text-base font-medium ${amountColor}`}>
              {isExpense ? `-${Math.abs(amount)}` : `+${amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Transactions;
