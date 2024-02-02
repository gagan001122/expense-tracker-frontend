import { useGlobalContext } from "../context/globalContext";

function Transactions() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();
  return (
    <div className="flex flex-col gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md no-scrollbar p-4 rounded-2xl overflow-y-auto h-[29.5rem]">
      <h2 className="text-2xl font-bold mb-4 p-4">Recent Transactions</h2>
      {history.map((item) => {
        const { id, amount } = item;

        return (
          <div
            key={`${id}`} // Use a combination of _id and index as a key
            className={`history-item bg-FCF6F9 border-b-2 border-grey shadow-sm p-4 rounded-2xl flex justify-between items-center space-x-4`}
          >
            <p className={`text-base font-medium text-grey-600`}>
              {item.description.slice(0, 12)}
            </p>
            <p className={`text-base font-medium text-red-600`}>
              {`-${Math.abs(amount)}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Transactions;
