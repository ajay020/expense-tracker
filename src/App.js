import HomePage from "./pages/HomePage";
import ContextProvider from "./context/ContextProvider";

function App() {

  

  return (
    <div>
        <ContextProvider>
            <HomePage/>
        </ContextProvider>
    </div>
  );
}

export default App;
