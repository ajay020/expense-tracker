import { useContext } from "react";
import moment from "moment";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TransactionContext } from "../../context/ContextProvider";
import styles from "./Navigator.module.css";

function Navigator({ date, moveBack, moveForward, toggleAddForm }) {
  const { filterBy } = useContext(TransactionContext);

  let formattedDate = moment(date).format("DD");

  if (filterBy === "day") {
    formattedDate = moment(date).format("DD MMMM");
  } else if (filterBy === "month") {
    formattedDate = moment(date).format("MMMM");
  } else if (filterBy === "year") {
    formattedDate = moment(date).format("YYYY");
  }

  return (
    <div className={styles.navigator__container}>
      <MdArrowBackIos
        onClick={moveBack}
        className={styles.navigator__container_back_arrow}
      />
      <p>{formattedDate}</p>
      <MdArrowForwardIos
        onClick={moveForward}
        className={styles.navigator__container_forward_arrow}
      />
      <button onClick={toggleAddForm}>Add</button>
    </div>
  );
}

export default Navigator;
