import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import AddExpenseToGroupForm from "./AddExpenseToGroupForm";
import IncomeItem from "../income/IncomeItem";
// import GroupExpenses from "./GroupExpenses";
// import Group from "./Group";
function AddExpenseToGroup() {
  const { groupexpenses, deleteGroupExpense, getGroupExpenses, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getGroupExpenses();
  }, []);

  return (
    <div className="flex overflow-auto h-full">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Group X</h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Expense:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">
            ${totalExpenses()}
          </span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <AddExpenseToGroupForm />
          </div>
          {/* <div className="flex-1 text">
            <div className="flex flex-col items-center w-full gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl overflow-y-auto h-[29.5rem] no-scrollbar">
              <h2 className="text-2xl font-bold mb-4 p-4">Group Members</h2>
              <Group />
            </div>
          </div> */}
          <div className="flex-1 text">
            <div className="flex flex-col items-center w-full gap-4 bg-FCF6F9 border-2 border-FFFFFF shadow-md p-4 rounded-2xl overflow-y-auto h-[29.5rem] no-scrollbar">
              <h2 className="text-2xl font-bold mb-4 p-4">
                Group Memeber Expenses
              </h2>

              {groupexpenses.map((expense) => {
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
                    deleteItem={deleteGroupExpense}
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

export default AddExpenseToGroup;
