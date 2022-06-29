import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={styles.sidebar_list}>
      <li>Day</li>
      <li>Week</li>
      <li>Month</li>
      <li>Year</li>
      <input type="date" />
    </ul>
  );
};

export default Sidebar;
