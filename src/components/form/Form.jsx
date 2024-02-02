import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import { useGlobalContext } from "../../context/globalContext";
import { IoAddOutline } from "react-icons/io5";
function Form() {
  const { addIncome, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const { title, amount, date, category } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
    });
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Budget Title"
          onChange={handleInput("title")}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Budget Amount"}
          onChange={handleInput("amount")}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={
            <IoAddOutline
              className="cursor-pointer"
              size={"20px"}
              style={{ marginRight: "4px" }}
            />
          }
        />
      </div>
    </form>
  );
}

export default Form;
