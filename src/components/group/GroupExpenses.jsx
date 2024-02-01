// import { useEffect } from "react";
// import { useGlobalContext } from "../../context/globalContext";
import GroupForm from "./GroupForm";
import GroupList from "./GroupList";

function GroupExpenses() {
  // const { getExpenses, totalExpenses } = useGlobalContext();

  // useEffect(() => {
  //   getExpenses();
  // }, []);

  return (
    <div className="flex overflow-auto">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-4 mb-4">
        <h1 className="text-3xl font-semibold mb-4">Group Expenses</h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Group Expense:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">
            {/* ${totalExpenses()} */}
            $$$
          </span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <GroupForm />
          </div>
          <div className="flex-1">
            <GroupList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupExpenses;
