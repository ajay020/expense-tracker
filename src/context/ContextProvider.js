import {createContext, useState} from 'react'
export const TransactionContext = createContext()

function ContextProvider({children}) {
  const [filterBy, setFilterBy] = useState("day");

  return (
    <TransactionContext.Provider value={ {filterBy, setFilterBy }}>
        {children}
    </TransactionContext.Provider>
  )
}

export default ContextProvider