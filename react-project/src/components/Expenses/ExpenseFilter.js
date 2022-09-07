import React from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  //my solution
  //const [selectedYear, setSelectedYear] = useState("");
  //const selectHandler = (event) => {
  //setSelectedYear(event.target.value);
  //calling function that is received through props
  //props.onFilterDate(event.target.value);
  //}

  //Tutorial solution

  const dropdownChangeHandler = (event) => {
    //if logged here using event.target.value the value will log
    // what we need is to forward the value to Expenses.js file
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
