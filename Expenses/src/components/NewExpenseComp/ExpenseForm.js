import { useRef } from "react";
import Button from "../Common/Button";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const enteredTitle = useRef();
  const enteredAmount = useRef();
  const enteredDate = useRef();

  const cancelForm = () => {
    props.onCancel();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle.current.value,
      amount: +enteredAmount.current.value,
      date: new Date(enteredDate.current.value),
    };

    props.onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      {enteredTitle.current}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" ref={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button onClick={cancelForm} type="button" btnLabel="Cancel" />
        <Button type="submit" btnLabel="Submit" />
      </div>
    </form>
  );
};

export default ExpenseForm;
