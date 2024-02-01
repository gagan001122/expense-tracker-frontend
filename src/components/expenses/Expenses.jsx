import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "../income/IncomeItem";

function Expenses() {
  const { expenses, deleteExpense, getExpenses, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="flex overflow-auto">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-4 mb-4">
        <h1 className="text-3xl font-semibold mb-4">Expenses</h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Expense:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">
            ${totalExpenses()}
          </span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <ExpenseForm />
          </div>
          <div className="flex-1 text">
            <div className="flex flex-col gap-4">
              {expenses.map((expense) => {
                const { _id, title, amount, date, category, type } = expense;
                return (
                  <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    indicatorColor="var(--color-green)"
                    deleteItem={deleteExpense}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
