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
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
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
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  const addGroup = async (newGroup) => {
    try {
      // Mock adding a new group to the local state
      setGroups([...groups, newGroup]);
    } catch (error) {
      console.error("Error adding group:", error);
    }
  };
  const deleteGroup = async (groupId) => {
    try {
      // Mock deleting a group from the local state
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
