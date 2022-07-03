import { useContext } from "react";
import { TransactionContext } from "../../context/ContextProvider";
import styles from "./Sidebar.module.css";

const Sidebar = ({ filterListByMonth, filterListByDay }) => {
  //   console.log("Sidebar render");
  const { setFilterBy } = useContext(TransactionContext);
  const filterByDay = () => {
    setFilterBy("day");
    filterListByDay();
  };
  const filterByMonth = () => {
    setFilterBy("month");
    filterListByMonth();
  };

  return (
    <ul className={styles.sidebar_list}>
      <li onClick={filterByDay}>Day</li>
      <li>Week</li>
      <li onClick={filterByMonth}>Month</li>
      <li>Year</li>
    </ul>
  );
};

export default Sidebar;
