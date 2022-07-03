import styles from "./Sidebar.module.css";

const Sidebar = ({ filterListByMonth, filterListByDay }) => {
  console.log("Sidebar render");
  return (
    <ul className={styles.sidebar_list}>
      <li onClick={filterListByDay}>Day</li>
      <li>Week</li>
      <li onClick={filterListByMonth}>Month</li>
      <li>Year</li>
    </ul>
  );
};

export default Sidebar;
