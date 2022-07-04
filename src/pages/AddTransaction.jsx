import { useState, useContext } from "react";
import { TransactionContext } from "../context/ContextProvider";
import styles from "./AddTransaction.module.css";

const AddTransaction = ({ displayAddForm, setDisplayAddForm }) => {
  console.log("AddTransaction render");
  const [date, setDate] = useState("");
  const { transactionList, setTransactionList } =
    useContext(TransactionContext);

  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Food");

  const addTransaction = () => {
    setDisplayAddForm(false);

    if (category === "" || amount === 0 || date === "") {
      return;
    }

    let existedTransaction = transactionList.find(
      (item) =>
        new Date(item.date).toDateString() === new Date(date).toDateString()
    );

    if (existedTransaction) {
      let newTransaction = JSON.stringify(existedTransaction);
      newTransaction = JSON.parse(newTransaction);

      let existCategory = newTransaction.categories.find(
        (cat) => cat.type === category
      );
      if (existCategory) {
        existCategory.items.push({ title: note, price: amount });
      } else {
        newTransaction.categories.push({
          type: category,
          items: [{ title: note, price: amount }],
        });
      }
      let filteredList = transactionList.filter(
        (obj) =>
          new Date(obj.date).toDateString() !== new Date(date).toDateString()
      );
      setTransactionList([newTransaction, ...filteredList]);
    } else {
      let transaction = {
        id: transactionList.length,
        date,
        categories: [
          {
            type: category,
            items: [{ title: note, price: amount }],
          },
        ],
      };
      setTransactionList((preList) => [transaction, ...preList]);
    }
  };

  return (
    <div
      className={styles.add_transaction_container}
      style={{ display: displayAddForm ? "flex" : "none" }}
    >
      <input
        type="date"
        placeholder="choose a date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="type amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Food">Food</option>
        <option value="Car">Car</option>
        <option value="Clothe">Clothe</option>
        <option value="Bills">Bills</option>
      </select>
      <button onClick={addTransaction}>Add</button>
      <button onClick={() => setDisplayAddForm(false)}>Cancel</button>
    </div>
  );
};

export default AddTransaction;
