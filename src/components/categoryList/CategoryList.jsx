import CategoryItem from "../categoryItem/CategoryItem";
import styles from "./CategoryList.module.css";
import expenseList from "./../../dummyData";

function CategoryList({ categories }) {
  return (
    <div className={styles.categoryList_container}>
      <div>
        <div>
          {categories.map((data) => (
            <CategoryItem key={data.type} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
