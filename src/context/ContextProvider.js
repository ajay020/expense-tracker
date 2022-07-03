import {createContext, useState} from 'react'
export const TransactionContext = createContext()

function ContextProvider({children}) {
  const [filterBy, setFilterBy] = useState("day");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <TransactionContext.Provider value={ {filterBy, setFilterBy, isDrawerOpen,setIsDrawerOpen  }}>
        {children}
    </TransactionContext.Provider>
  )
}

export default ContextProvider