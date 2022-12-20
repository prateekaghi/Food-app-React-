import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  console.log();
  const filteredExpenses = props.expenses.items.filter((expense) => {
    return expense.date.getFullYear().toString() === props.selectedYear;
  });

  if (filteredExpenses.length === 0) {
    return (
      <h3 className="expenses-list__fallback">
        No Expenses For the Selected Year
      </h3>
    );
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </ul>
  );
};
export default ExpensesList;
