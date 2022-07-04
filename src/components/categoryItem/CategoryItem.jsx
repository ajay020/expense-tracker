import { useState, useEffect } from "react";
import SubCategoryList from "../subCategoryList/SubCategoryList";
import styles from "./CategoryItem.module.css";
import {
  IoChevronUpOutline as UpArrow,
  IoChevronDown as DownArrow,
} from "react-icons/io5";
function CategoryItem({ category }) {
  const [showItems, setshowItems] = useState(false);
  const [total, setTotal] = useState(0.0);
  const onClickHandler = () => {
    setshowItems(!showItems);
  };

  useEffect(() => {
    let sum = 0;
    category.items.forEach((item) => {
      sum += parseFloat(item.price);
    });
    setTotal(sum);
  }, [category]);

  return (
    <>
      <div className={styles.categoryItem_container} onClick={onClickHandler}>
        <div className={styles.categoryItem_container_type}>
          {showItems ? <UpArrow /> : <DownArrow />}
          <p>{category.type}</p>
        </div>
        <p className={styles.categoryItem_container_total_text}>
          {total}&#x20b9;
        </p>
      </div>
      {showItems && <SubCategoryList items={category.items} />}
    </>
  );
}

export default CategoryItem;
