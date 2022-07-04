import { useState, useEffect } from "react";
import AddTransaction from "../../pages/AddTransaction";
import ExpensePieChart from "../expenseChart/ExpensePieChart";
import Navigator from "../navigator/Navigator";
import CategoryList from "./../categoryList/CategoryList";
import styles from "./ExpenseOverview.module.css";

function ExpenseOverview({ transactions, x }) {
  console.log("Expenseover render");
  const [transactionList, setTransactionList] = useState(transactions);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [totalItemPriceList, setTotalItemPriceList] = useState([]);

  const toggleAddForm = () => {
    setDisplayAddForm((preState) => !preState);
  };

  const moveBack = () => {
    if (currentIndex != 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveForward = () => {
    if (currentIndex < transactionList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  let currentExpenseItem = transactionList[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setTransactionList(transactions);
  }, [transactions]);

  useEffect(() => {
    currentExpenseItem = transactionList[currentIndex];
    let totalPriceList = [];
    let categoryTypeList = currentExpenseItem?.categories.map((currItem) => {
      let sum = 0;
      currItem.items.forEach((item) => {
        sum += parseFloat(item.price);
      });

      totalPriceList.push(sum);

      return currItem.type;
    });
    setCategoryTypes(categoryTypeList);
    setTotalItemPriceList(totalPriceList);
  }, [currentIndex, transactionList, transactions]);

  return (
    <div className={styles.expenseOverview__container}>
      <AddTransaction
        transactionList={transactionList}
        setTransactionList={setTransactionList}
        displayAddForm={displayAddForm}
        setDisplayAddForm={setDisplayAddForm}
      />
      <Navigator
        date={currentExpenseItem?.date}
        moveBack={moveBack}
        moveForward={moveForward}
        toggleAddForm={toggleAddForm}
      />
      <div className={styles.chart_container}>
        <ExpensePieChart
          categoriesTypes={categoryTypes}
          totalPrices={totalItemPriceList}
        />
      </div>
      <CategoryList categories={currentExpenseItem?.categories} />
    </div>
  );
}

export default ExpenseOverview;
