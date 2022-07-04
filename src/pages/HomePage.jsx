import { useState, useEffect, useContext } from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import ExpenseOverview from "./../components/expenseOverview/ExpenseOverview";
import styles from "./HomePage.module.css";
import { TransactionContext } from "../context/ContextProvider";

function HomePage() {
  const { isDrawerOpen, transactionList } = useContext(TransactionContext);
  const [transactions, setTransactions] = useState(transactionList);
  console.log("Homepage render", transactions);

  useEffect(() => {
    setTransactions(transactionList);
  }, [transactionList]);

  const filterListByDay = () => {
    setTransactions(transactionList);
  };

  const filterListByYear = () => {
    let jsonString = JSON.stringify(transactionList);
    let tempList = JSON.parse(jsonString);

    let yearlyTransactions = {};
    tempList.forEach((transaction) => {
      //   let month = new Date(transaction.date).getMonth().toString();
      let year = new Date(transaction.date).getFullYear().toString();
      let key = year;

      if (yearlyTransactions[key]) {
        let catA = yearlyTransactions[key].categories;
        let catB = transaction.categories;
        catB.forEach((catb) => {
          let combinedCat = {};
          let existedCat = catA.find((elem) => catb.type === elem.type);
          if (existedCat) {
            combinedCat.type = existedCat.type;
            combinedCat.items = [...catb.items, ...existedCat.items];
            let filterdList = catA.filter(
              (cat) => cat.type !== existedCat.type
            );
            yearlyTransactions[key].categories = [...filterdList, combinedCat];
          } else {
            yearlyTransactions[key].categories.push(catb);
          }
        });
      } else {
        yearlyTransactions[key] = transaction;
      }
    });

    setTransactions(Object.values(yearlyTransactions));
    // console.log(Object.values(yearlyTransactions));
  };

  const filterListByMonth = () => {
    let jsonString = JSON.stringify(transactionList);
    let tempList = JSON.parse(jsonString);

    let monthlyTransactions = {};
    tempList.forEach((transaction) => {
      let month = new Date(transaction.date).getMonth().toString();
      let year = new Date(transaction.date).getFullYear().toString();
      let key = month + year;

      if (monthlyTransactions[key]) {
        let catA = monthlyTransactions[key].categories;
        let catB = transaction.categories;
        catB.forEach((catb) => {
          let combinedCat = {};
          let existedCat = catA.find((elem) => catb.type === elem.type);
          if (existedCat) {
            combinedCat.type = existedCat.type;
            combinedCat.items = [...catb.items, ...existedCat.items];
            let filterdList = catA.filter(
              (cat) => cat.type !== existedCat.type
            );
            monthlyTransactions[key].categories = [...filterdList, combinedCat];
          } else {
            monthlyTransactions[key].categories.push(catb);
          }
        });
      } else {
        monthlyTransactions[key] = transaction;
      }
    });

    setTransactions(Object.values(monthlyTransactions));
  };

  return (
    <div className={styles.homepage_container}>
      <div
        className={styles.homepage_container_sidebar}
        style={{ left: isDrawerOpen ? "0px" : "-300px" }}
      >
        <Sidebar
          filterListByMonth={filterListByMonth}
          filterListByDay={filterListByDay}
          filterListByYear={filterListByYear}
        />
      </div>

      <ExpenseOverview
        transactions={transactions}
        filterListByDay={filterListByDay}
      />
    </div>
  );
}

export default HomePage;
