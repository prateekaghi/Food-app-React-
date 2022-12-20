import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");
  const yearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  console.log("this", props.items);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
