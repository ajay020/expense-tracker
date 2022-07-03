import { useContext } from "react";
import { TransactionContext } from "../../context/ContextProvider";
import styles from "./Sidebar.module.css";

const Sidebar = ({ filterListByMonth, filterListByDay, filterListByYear }) => {
  //   console.log("Sidebar render");
  const { setFilterBy, setIsDrawerOpen } = useContext(TransactionContext);
  const filterByDay = () => {
    setIsDrawerOpen(false);
    setFilterBy("day");
    filterListByDay();
  };
  const filterByMonth = () => {
    setIsDrawerOpen(false);
    setFilterBy("month");
    filterListByMonth();
  };

  const filterByYear = () => {
    setIsDrawerOpen(false);
    setFilterBy("year");
    filterListByYear();
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ul className={styles.sidebar_list}>
      <li onClick={closeDrawer}>X</li>
      <li onClick={filterByDay}>Day</li>
      {/* <li>Week</li> */}
      <li onClick={filterByMonth}>Month</li>
      <li onClick={filterByYear}>Year</li>
    </ul>
  );
};

export default Sidebar;
