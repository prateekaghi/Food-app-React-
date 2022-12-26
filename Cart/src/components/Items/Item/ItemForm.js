import styles from "./ItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const ItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amoutInputRef = useRef();
  const addItemHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amoutInputRef.current.value;
    const enterAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enterAmountNumber);
  };
  return (
    <form onSubmit={addItemHandler} className={styles.form}>
      <Input
        ref={amoutInputRef}
        id={props.item.id}
        label="Quantity"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountValid && <p>Enter Valid Amount</p>}
    </form>
  );
};

export default ItemForm;
