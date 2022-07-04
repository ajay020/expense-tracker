import { useContext } from "react";
import moment from "moment";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { TransactionContext } from "../../context/ContextProvider";
import styles from "./Navigator.module.css";

function Navigator({ date, moveBack, moveForward, toggleAddForm }) {
  const { filterBy, setIsDrawerOpen } = useContext(TransactionContext);

  let formattedDate = moment(date).format("ddd, DD MMMM");

  if (filterBy === "day") {
    formattedDate = moment(date).format("ddd, D MMMM");
  } else if (filterBy === "month") {
    formattedDate = moment(date).format("MMMM");
  } else if (filterBy === "year") {
    formattedDate = moment(date).format("YYYY");
  }

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className={styles.navigator__container}>
      <MenuIcon
        className={styles.navigator__container_menu_icon}
        onClick={handleOpenDrawer}
      />
      <div className={styles.navigator__container_arrows}>
        <MdArrowBackIos
          onClick={moveBack}
          className={styles.navigator__container_back_arrow}
        />
        <p>{formattedDate}</p>
        <MdArrowForwardIos
          onClick={moveForward}
          className={styles.navigator__container_forward_arrow}
        />
      </div>
      <button onClick={toggleAddForm}>Add</button>
    </div>
  );
}

export default Navigator;
