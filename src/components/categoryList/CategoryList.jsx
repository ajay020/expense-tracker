import CategoryItem from "../categoryItem/CategoryItem";
import styles from "./CategoryList.module.css";
import expenseList from "./../../dummyData";

function CategoryList({ item }) {
  return (
    <div className={styles.categoryList_container}>
      <div>
        <div>{item.date}</div>
        <div>
          {item.categories.map((data) => (
            <CategoryItem key={data.type} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
