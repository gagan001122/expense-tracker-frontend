import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
function Income() {
  const { getIncomes, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="flex overflow-auto h-full">
      <div className="w-full bg-white border-2 border-solid border-white shadow-md rounded-2xl p-8 ">
        <h1 className="text-3xl font-semibold mb-4">Budget</h1>
        <h2 className="total-income text-2xl font-semibol flex justify-center items-center bg-[#FCF6F9] border-2 border-white box-border border-solid shadow-md rounded-2xl p-4 mb-4">
          Total Budget:{" "}
          <span className="text-green-700 text-2xl ml-3 font-bold">
            $ {totalIncome()}
          </span>
        </h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <Form getIncomes={getIncomes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
