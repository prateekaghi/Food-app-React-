import { Fragment } from "react";
import styles from "./Header.module.css";
import image from "../../assets/image.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Restaurant</h1>

        <div onClick={props.onCartClick}>
          {" "}
          <CartButton />
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="images" />
      </div>
    </Fragment>
  );
};

export default Header;
