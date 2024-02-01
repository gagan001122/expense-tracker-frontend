import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "./IncomeItem";
function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="flex overflow-auto h-full">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-8 ">
        <h1 className="text-3xl font-semibold mb-4">Incomes</h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Income:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">
            ${totalIncome()}
          </span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <Form />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              {incomes.map((income) => (
                <IncomeItem
                  key={income._id}
                  id={income._id}
                  title={income.title}
                  amount={income.amount}
                  date={income.date}
                  type={income.type}
                  category={income.category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
