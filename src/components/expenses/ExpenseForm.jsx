import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import axios from "axios";
function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const { getExpenses } = useGlobalContext();

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="input-control">
        <input
          type="text"
          name={"title"}
          placeholder="Expense Title"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-slate-400 rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          name={"amount"}
          placeholder={"Expense Amount"}
          onChange={(e) => setAmount(e.target.value)}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="selects input-control">
        <select
          required
          name="category"
          id="category"
          className="text-gray-400 border-slate-400 border-2 focus:text-gray-900 placeholder:text-slate-800"
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="education">Food</option>
        </select>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Expense"}
          icon={
            <IoAddOutline
              className="cursor-pointer"
              size={"20px"}
              style={{ marginRight: "4px" }}
            />
          }
          onClick={(e) => {
            e.preventDefault();
            axios
              .post(
                `${
                  import.meta.env.VITE_API
                }/expense/create?userId=${localStorage.getItem(
                  "selfId"
                )}&categoryId=52`,
                {
                  amount: amount,
                  description: title,
                }
              )
              .then(({ data }) => {
                getExpenses();
                console.log(data);
              })
              .catch((e) => console.log(e));
          }}
        />
      </div>
    </form>
  );
}

export default ExpenseForm;
