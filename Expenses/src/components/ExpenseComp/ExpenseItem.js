import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  let title = props.item.title;
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.item.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
