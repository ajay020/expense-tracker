import "./ExpenseOverview.module.css";
import expenseList from "./../../dummyData";
import CategoryList from "./../categoryList/CategoryList";

function ExpenseOverview() {
  return (
    <div>
      {expenseList.map((expenseItem) => (
        <div key={expenseItem.id}>
          <div>{expenseItem.date}</div>
          <CategoryList categories={expenseItem.categories} />
        </div>
      ))}
    </div>
  );
}

export default ExpenseOverview;
