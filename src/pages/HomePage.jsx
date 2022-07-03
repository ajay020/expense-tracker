import { useState, useEffect } from "react";
import Sidebar from "./../components/sidebar/Sidebar";
import ExpenseOverview from "./../components/expenseOverview/ExpenseOverview";
import styles from "./HomePage.module.css";
import expenseList from "../dummyData";

function HomePage() {
  console.log("Homepage render");
  const [transactions, setTransactions] = useState(expenseList);

  const filterListByDay = () => {
    setTransactions(expenseList);
  };

  useEffect(() => {
    setTransactions(expenseList);
  }, []);

  const filterListByMonth = () => {
    let jsonString = JSON.stringify(transactions);
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
      <Sidebar
        filterListByMonth={filterListByMonth}
        filterListByDay={filterListByDay}
      />
      <ExpenseOverview
        transactions={transactions}
        filterListByDay={filterListByDay}
      />
    </div>
  );
}

export default HomePage;
