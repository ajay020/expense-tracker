import { useState, useEffect } from "react";
import styles from "./CategoryItem.module.css";

function CategoryItem({ data }) {
  const [showItems, setshowItems] = useState(false);
  const [total, setTotal] = useState(0.0);
  const onClickHandler = () => {
    setshowItems(!showItems);
  };

  useEffect(() => {
    let sum = 0;
    data.items.forEach((item) => {
      sum += item.price;
    });
    setTotal(sum);
  }, []);

  return (
    <div className={styles.categoryItem_container}>
      <div
        className={styles.categoryItem_container_heading}
        onClick={onClickHandler}
      >
        <p>{data.type}</p>
        <p>{total}$</p>
      </div>
      {showItems && (
        <div className={styles.categoryItem_container_body}>
          <ul className={styles.categoryItem_container_body_list}>
            {data.items.map((item) => {
              return (
                <li key={item.type}>
                  <div
                    className={styles.categoryItem_container_body_list_items}
                  >
                    <p>{item.price}$</p>
                    <p>{item.title}</p>
                    <p>12 June</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryItem;
