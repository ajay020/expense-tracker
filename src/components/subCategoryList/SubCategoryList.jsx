import styles from "./SubCategoryList.module.css";

function SubCategoryList({ items }) {
  return (
    <div className={styles.categoryItem_container_body}>
      <ul className={styles.categoryItem_container_body_list}>
        {items.map((item) => {
          return (
            <li key={item.price}>
              <div className={styles.categoryItem_container_body_list_items}>
                <p>{item.price}$</p>
                <p>{item.title}</p>
                <p>12 June</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubCategoryList;
