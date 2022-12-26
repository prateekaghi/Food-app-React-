import styles from "./ItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const ItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const quantityInputRef = useRef();
  const addItemHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;

    const enterQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enterQuantityNumber < 1 ||
      enterQuantityNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enterQuantityNumber);
  };
  return (
    <form onSubmit={addItemHandler} className={styles.form}>
      <Input
        ref={quantityInputRef}
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
