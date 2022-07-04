import {createContext, useState} from 'react'
import expenseList from '../dummyData';
export const TransactionContext = createContext()

function ContextProvider({children}) {
    console.log("ContextPrivider render")
  const [filterBy, setFilterBy] = useState("day");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [transactionList, setTransactionList] = useState(expenseList);

  return (
    <TransactionContext.Provider value={ 
        {
             filterBy,
             setFilterBy,
             isDrawerOpen,
             setIsDrawerOpen,
             transactionList,
             setTransactionList  
        }}>
        {children}
    </TransactionContext.Provider>
  )
}

export default ContextProvider