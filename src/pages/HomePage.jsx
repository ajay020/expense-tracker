import Sidebar from "./../components/sidebar/Sidebar";
import ExpenseOverview from "./../components/expenseOverview/ExpenseOverview";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage_container}>
      <Sidebar />
      <ExpenseOverview />
    </div>
  );
}

export default HomePage;
