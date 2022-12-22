import { useState } from "react";
import Button from "../Common/Button";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);
  const showFormHandler = () => {
    setAddingExpense(!addingExpense);
  };
  const saveExpenseDataHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };
  const cancelHandler = () => {
    setAddingExpense(false);
  };
  return (
    <div className="new-expense">
      {addingExpense ? (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <Button
          type="button"
          onClick={showFormHandler}
          btnLabel="Add New Expense"
        />
      )}
    </div>
  );
};

export default NewExpense;
