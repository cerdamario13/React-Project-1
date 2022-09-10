import React from "react";

const CollapseCard = (props) => {
    
    const addNewExpense = () => {
        const str_value = "Add New Expense";
        props.onAddNewExpense(str_value);
    }
    

    return (
        <div className="new-expense">
            <button onClick={addNewExpense}> Add New Expense</button>
        </div>
    );
};

export default CollapseCard;
