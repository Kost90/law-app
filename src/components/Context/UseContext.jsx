import { useState, createContext, useContext, useReducer, useCallback } from 'react'

export const DataContext = createContext()


export const DataContextProvider = ({children}) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  return (
    <DataContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}  
    </DataContext.Provider>
  )
}
