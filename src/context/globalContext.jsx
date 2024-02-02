import React, { useContext, useState } from "react";
import axios from "axios";
const GlobalContext = React.createContext();
const BASE_URL = "http://localhost:8000/api/v1/";

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [groupexpenses, setGroupExpenses] = useState([]);
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  //calculate incomes
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/user/${localStorage.getItem("selfId")}`
    );
    setIncomes(response.data.budget || 0);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    return incomes;
  };

  const addExpense = async (income) => {
    const response = await axios
      .post(
        `${
          import.meta.env.VITE_API
        }/expense/create?userId=${localStorage.getItem(
          "selfId"
        )}?categoryId=52`,
        {
          description: "",
          amount: income,
        }
      )
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    axios
      .get(
        `${import.meta.env.VITE_API}/expense/user/${localStorage.getItem(
          "selfId"
        )}`
      )
      .then(({ data }) => {
        console.log("BAKA", data);
        setExpenses(data);
      })
      .catch((err) => console.log("BAKA", err));
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const addGroupExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-group-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getGroupExpenses();
  };

  const getGroupExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-group-expenses`);
    setGroupExpenses(response.data);
    console.log(response.data);
  };

  const deleteGroupExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-group-expense/${id}`);
    getGroupExpenses();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach(({ amount }) => {
      totalIncome += amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history;
  };

  const addGroup = async (newGroup) => {
    try {
      setGroups([...groups, newGroup]);
    } catch (error) {
      console.error("Error adding group:", error);
    }
  };
  const deleteGroup = async (groupId) => {
    try {
      const updatedGroups = groups.filter((group) => group.id !== groupId);
      setGroups(updatedGroups);
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
        groups,
        setGroups,
        addGroup,
        groupexpenses,
        deleteGroup,
        addGroupExpense,
        getGroupExpenses,
        deleteGroupExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
