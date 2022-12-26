import CartICon from "./CartIcon";
import styles from "./CartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = () => {
  const CartCtx = useContext(CartContext);
  const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartICon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
