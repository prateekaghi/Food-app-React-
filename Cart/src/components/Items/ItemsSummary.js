import styles from "./ItemsSummary.module.css";

const ItemSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our variety of available meals and enjoy
        a delicious meal at home with just a click!!
      </p>
      <p>Cooked with high-quality ingredients, by trained Chefs.</p>
    </section>
  );
};

export default ItemSummary;
