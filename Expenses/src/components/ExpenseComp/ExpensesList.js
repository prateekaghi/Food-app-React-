import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return (
      <h3 className="expenses-list__fallback">
        No Expenses For the Selected Year
      </h3>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </ul>
  );
};
export default ExpensesList;
