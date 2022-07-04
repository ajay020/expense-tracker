import styles from "./SubCategoryListItem.module.css";

function SubCategoryListItem({ item }) {
  return (
    <li key={item.price} className={styles.subcategory_list_item}>
      <div className={styles.subcategory_list_item_row}>
        <div className={styles.txt_price_title}>
          <p>{item.price}&#x20b9;</p>
          <p>{item.title}</p>
        </div>
        <p>12 June</p>
      </div>
    </li>
  );
}

export default SubCategoryListItem;
