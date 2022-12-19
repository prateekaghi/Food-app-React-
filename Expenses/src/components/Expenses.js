import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem item={props.expenses[0]} />
      <ExpenseItem item={props.expenses[1]} />
      <ExpenseItem item={props.expenses[2]} />
      <ExpenseItem item={props.expenses[3]} />
    </Card>
  );
}

export default Expenses;
