import styles from "./AvailableItems.module.css";
import Card from "../UI/Card";
import Item from "./Item/Item";

const data = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableItems = () => {
  const items = data.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    >
      {item.name}
    </Item>
  ));

  return (
    <section className={styles.item}>
      <Card>
        <ul>{items}</ul>
      </Card>
    </section>
  );
};
export default AvailableItems;
