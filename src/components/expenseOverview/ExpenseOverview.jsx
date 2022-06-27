import { useState, useEffect } from "react";
import Navigator from "../navigator/Navigator";
import expenseList from "./../../dummyData";
import CategoryList from "./../categoryList/CategoryList";
import styles from "./ExpenseOverview.module.css";

function ExpenseOverview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveBack = () => {
    if (currentIndex != 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveForward = () => {
    if (currentIndex < expenseList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  let currentExpenseItem = expenseList[currentIndex];
  useEffect(() => {
    currentExpenseItem = expenseList[currentIndex];
  }, [currentIndex]);

  return (
    <div>
      <div className={styles.expenseOverview__container}>
        <Navigator
          date={currentExpenseItem.date}
          moveBack={moveBack}
          moveForward={moveForward}
        />
        <CategoryList categories={currentExpenseItem.categories} />
      </div>
    </div>
  );
}

export default ExpenseOverview;
