import styles from "./Item.module.css";
import ItemForm from "./ItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };
  return (
    <li className={styles.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <ItemForm onAddToCart={addToCartHandler} item={props} />
      </div>
    </li>
  );
};

export default Item;
