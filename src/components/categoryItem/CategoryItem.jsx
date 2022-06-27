import { useState, useEffect } from "react";
import SubCategoryList from "../subCategoryList/SubCategoryList";
import styles from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  const [showItems, setshowItems] = useState(false);
  const [total, setTotal] = useState(0.0);
  const onClickHandler = () => {
    setshowItems(!showItems);
  };

  useEffect(() => {
    let sum = 0;
    category.items.forEach((item) => {
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
        <p>{category.type}</p>
        <p>{total}$</p>
      </div>
      {showItems && <SubCategoryList items={category.items} />}
    </div>
  );
}

export default CategoryItem;
