import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Transactions from "../../transactions/Transactions";
import { FaRupeeSign } from "react-icons/fa";
import Chart from "../chart/Chart";

function Dashboard() {
  const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const balanceColor = totalBalance() < 0 ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="p-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">All Transactions</h1>
        <div className="grid grid-cols-5 gap-8 mt-8">
          <div className="col-span-3 space-y-8">
            <Chart />
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-fcf6f9 border-2 border-grey shadow-md rounded-2xl p-4">
                <h2 className="text-xl font-semibold">Total Income</h2>
                <p className="text-2xl font-bold flex items-center">
                  {<FaRupeeSign />} {totalIncome()}
                </p>
              </div>
              <div className="bg-fcf6f9 border-2 border-grey shadow-md rounded-2xl p-4">
                <h2 className="text-xl font-semibold">Total Expense</h2>
                <p className="text-2xl font-bold flex items-center">
                  {<FaRupeeSign />} {totalExpenses()}
                </p>
              </div>
              <div className="bg-fcf6f9 border-2 border-grey shadow-md rounded-2xl p-4">
                <h2 className="text-xl font-semibold">Total Balance</h2>
                <p className="text-2xl font-bold flex items-center">
                  <span className={`${balanceColor} mr-1`}>
                    {<FaRupeeSign />}
                  </span>
                  <span className={balanceColor}>{totalBalance()}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
