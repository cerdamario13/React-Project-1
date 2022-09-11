import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import CollapseCard from "./components/NewExpense/CollapseCard";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  //data from form
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses];
    });
    // console.log(enteredExpenseData);
    console.log(expenseData);
  };
  
  //expand to allow user to enter a new expense
  const addNewExpense = (expandCard) => {
    console.log(expandCard);
  };

  const CancelNewExpense = (cancelExpense) => {
    console.log(cancelExpense);
  }
  

  //adding an expense
  // const addExpenseHandler = (expense) => {
  //   console.log('in App.js')
  //   console.loc(expenses)
    // setExpenses(prevExpenses => {
    //   return [expense, ...prevExpenses]
    // });
  //};

  return (
    <div>
      <NewExpense
        onSaveExpenseData={saveExpenseDataHandler}
        // onAddExpense={addExpenseHandler}
        onCancelNewExpense={CancelNewExpense}
      ></NewExpense>
      <CollapseCard onAddNewExpense={addNewExpense}></CollapseCard>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
