import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
  
  const filterDate =(filter) => {
    console.log(filter);
  }
  
  return (
    <div>
      <ExpensesFilter onFilterDate={filterDate}></ExpensesFilter>
      <Card className="expenses">
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
