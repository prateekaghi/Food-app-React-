import CartICon from "./CartIcon";
import styles from "./CartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const CartButton = () => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const btnClasses = `${styles.button} ${btnHighlight ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses}>
      <span className={styles.icon}>
        <CartICon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
