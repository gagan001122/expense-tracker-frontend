import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IncomeItem from "../income/IncomeItem";
import { useGlobalContext } from "../../context/globalContext";
import AddExpenseToGroupForm from "./AddExpenseToGroupForm";

const getTotalExpense = (arr) => {
  const totalSum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  return totalSum;
};

function AddExpenseToGroup() {
  const { deleteExpense } = useGlobalContext();
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/group/details/${groupId}`
      );
      setGroupData(response.data);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };
  fetchData();
  useEffect(() => {
    fetchData();
  }, [groupId]);

  return (
    <div className="flex overflow-auto h-full">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4">
          {groupData?.name || "Loading..."}
        </h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Expense:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">
            $ {groupData?.expenses ? getTotalExpense(groupData.expenses) : 0}
          </span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <AddExpenseToGroupForm />
          </div>
          <div className="flex-1 text">
            <div className="flex flex-col items-center w-full gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl overflow-y-auto h-[29.5rem] no-scrollbar">
              <h2 className="text-2xl font-bold mb-4 p-4">
                Group Member Expenses
              </h2>

              {groupData?.expenses &&
                groupData.expenses.map((expense) => (
                  <IncomeItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.description || ""}
                    amount={expense.amount}
                    date={expense.date}
                    type={expense.category?.name || ""}
                    category={expense.category?.name || ""}
                    indicatorColor="var(--color-green)"
                    deleteItem={deleteExpense}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpenseToGroup;
