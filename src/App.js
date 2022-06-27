import CategoryList from "./components/categoryList/CategoryList";
import expenseList from "./dummyData";

function App() {
  return (
    <div>
        {
            expenseList.map(item => <CategoryList key={item.date} item = {item}/>)
        }
    </div>
  );
}

export default App;
