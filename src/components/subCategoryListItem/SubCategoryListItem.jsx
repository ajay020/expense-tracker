import styles from "./SubCategoryListItem.module.css";

function SubCategoryListItem({ item }) {
  return (
    <li key={item.price} className={styles.subcategory_list_items}>
      <div className={styles.subcategory_list_item}>
        <p>{item.price}$</p>
        <p>{item.title}</p>
        <p>12 June</p>
      </div>
    </li>
  );
}

export default SubCategoryListItem;
