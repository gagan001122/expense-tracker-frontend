/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import { useGlobalContext } from "../../context/globalContext";
import axios from "axios";
import { IoAddOutline } from "react-icons/io5";
function Form({ getIncomes }) {
  const { error } = useGlobalContext();

  const [budget, setBudget] = useState();
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          name={"amount"}
          placeholder={"Budget Amount"}
          onChange={(e) => setBudget(e.target.value)}
          className="border-2 border-slate-400  rounded-md p-2 placeholder:text-slate-800"
        />
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Budget"}
          icon={
            <IoAddOutline
              className="cursor-pointer"
              size={"20px"}
              style={{ marginRight: "4px" }}
            />
          }
          onClick={() => {
            axios
              .patch(
                `${import.meta.env.VITE_API}/user/budget/${localStorage.getItem(
                  "selfId"
                )}?budget=${budget}`
              )
              .then(({ data }) => {
                console.log(data);
                getIncomes();
              })
              .catch((e) => {
                e.preventDefault();
                console.log(e);
              });
          }}
        />
      </div>
    </form>
  );
}

export default Form;
