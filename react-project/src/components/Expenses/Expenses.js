import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  //my solution
  // const filterDate =(filter) => {
  //   console.log(filter);
  // }

  const [filteredDate, setFilteredDate] = useState("2020");

  //Tutorial Solution
  const filterChangeHandler = (selectedYear) => {
    setFilteredDate(selectedYear);
    //console.log(selectedYear);
    //console.log('from expenses');
    //List filter based on year selection
  };
  
  //const [filterList, setFilterList] = useState("2020");
  let filterList = [];
  //console.log(props.data.map(date => date.date.getFullYear()));
  filterList = props.data.filter(date => date.date.getFullYear() == filteredDate);
  //console.log(filterList);
  
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredDate} // send the value
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>

        {filterList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
