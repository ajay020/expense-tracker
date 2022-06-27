import CategoryItem from "../categoryItem/CategoryItem";
import styles from "./CategoryList.module.css";
import expenseList from "./../../dummyData";

function CategoryList({ categories }) {
  return (
    <div className={styles.categoryList_container}>
      <div>
        <div>
          {categories.map((category) => (
            <CategoryItem key={category.type} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
