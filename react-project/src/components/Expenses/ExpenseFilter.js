import React from 'react';
import { useState } from 'react';

import './ExpenseFilter.css'

const ExpensesFilter = (props) => {
  
  const [selectedYear, setSelectedYear] = useState("");
  
  const selectHandler = (event) => {
    setSelectedYear(event.target.value);
  }
  
  props.onFilterDate({date: selectedYear});
  
  //Tutorial solution
  const ExpenseFilter = () => {
    const dropdownChangeHandler = (event) => {
      //if logged here using event.target.value the value will log
      // what we need is to forward the value to Expenses.js file
    }
  }
  
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectHandler} value={selectedYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;