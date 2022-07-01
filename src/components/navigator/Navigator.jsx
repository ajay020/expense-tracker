import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "./Navigator.module.css";

function Navigator({ date, moveBack, moveForward, toggleAddForm }) {
  return (
    <div className={styles.navigator__container}>
      <MdArrowBackIos
        onClick={moveBack}
        className={styles.navigator__container_back_arrow}
      />
      <p>{date}</p>
      <MdArrowForwardIos
        onClick={moveForward}
        className={styles.navigator__container_forward_arrow}
      />
      <button onClick={toggleAddForm}>Add</button>
    </div>
  );
}

export default Navigator;
