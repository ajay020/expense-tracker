import CategoryItem from "../categoryItem/CategoryItem";
import styles from "./CategoryList.module.css";

function CategoryList({ categories }) {
  return (
    <div className={styles.categoryList_container}>
      {categories.map((category) => (
        <CategoryItem key={category.type} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
