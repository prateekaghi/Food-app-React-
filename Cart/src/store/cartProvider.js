import CartContext from "./cart-context";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.items.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.items);
    }

    const updatedTotal =
      state.totalAmount + action.items.price * action.items.quantity;

    return { items: updatedItems, totalAmount: updatedTotal };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartHandler = (items) => {
    dispatchCartAction({ type: "ADD", items: items });
  };

  const removeFromCartHandler = (item) => {
    dispatchCartAction({ type: "Remove", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
