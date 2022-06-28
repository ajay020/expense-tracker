import { useState, useEffect } from "react";
import ExpensePieChart from "../expenseChart/ExpensePieChart";
import Navigator from "../navigator/Navigator";
import expenseList from "./../../dummyData";
import CategoryList from "./../categoryList/CategoryList";
import styles from "./ExpenseOverview.module.css";

function ExpenseOverview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [totalItemPriceList, setTotalItemPriceList] = useState([]);

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
    let totalPriceList = [];
    let categoryTypeList = currentExpenseItem.categories.map((currItem) => {
      let sum = 0;
      currItem.items.forEach((item) => {
        sum += item.price;
      });
      totalPriceList.push(sum);

      return currItem.type;
    });

    setCategoryTypes(categoryTypeList);
    setTotalItemPriceList(totalPriceList);
  }, [currentIndex]);

  return (
    <div>
      <div className={styles.expenseOverview__container}>
        <Navigator
          date={currentExpenseItem.date}
          moveBack={moveBack}
          moveForward={moveForward}
        />
        <div className={styles.chart_container}>
          <ExpensePieChart
            categoriesTypes={categoryTypes}
            totalPrices={totalItemPriceList}
          />
        </div>
        <CategoryList categories={currentExpenseItem.categories} />
      </div>
    </div>
  );
}

export default ExpenseOverview;
