import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //Submit Form
  const submitHandler = (event) => {
    event.preventDefault(); // Page does not send request

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    
    //for more info, see video 57 on udemy course
    props.onSaveExpenseData(expenseData); //send data to app.js from form
    //Return the input to blank state
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  //Cancel the add Expense form
  const cancelForm = (e) => {
    e.preventDefault();
    const cancelBtn = 'Cancel Pressed'
    // console.log("Cancel Pressed");
    props.onCancelNewExpense(cancelBtn);
  }
 
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls"></div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <button type="submit" onClick={cancelForm}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
