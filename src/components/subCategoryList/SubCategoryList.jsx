import SubCategoryListItem from "../subCategoryListItem/SubCategoryListItem";
import styles from "./SubCategoryList.module.css";

function SubCategoryList({ items }) {
  return (
    <div className={styles.categoryItem_container_body}>
      <ul className={styles.categoryItem_container_body_list}>
        {items.map((item) => (
          <SubCategoryListItem key={item.price} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SubCategoryList;
