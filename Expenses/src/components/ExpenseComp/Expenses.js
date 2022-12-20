import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const yearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
