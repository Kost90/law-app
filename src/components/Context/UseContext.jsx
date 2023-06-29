import { createContext, useContext, useReducer } from 'react'

import { dataReducer } from '../reduser/dataReducer';
import { dataActionsTypes } from '../reduser/dataActiontypes';

export const DataContext = createContext()

const initialData = [];


export const useDataContext = () => {

    const context = useContext(DataContext)

    // const [open, setOpen] = useState(false)

    // const handleOpen = () => setOpen(true)
    // const handleClose = () => setOpen(false)

//   return (
//     <DataContext.Provider value={{ open, handleOpen, handleClose }}>
//       {children}  
//     </DataContext.Provider>
//   )
if (typeof context === 'undefined') {
    throw new Error('useDataContext must be used into DataProvider!')
  }

  return context
}

export const DataProvider = ({ children }) => {
    const [{ data }, dispatchUsers] = useReducer(dataReducer, {
      data: initialData,
    })
  
    const addData = newData => {
      // fetch()
      dispatchUsers({ type: dataActionsTypes.ADD_DATA, payload: { newData } })
    }
  
    const removeData = dataId => {
      // fetch()
      dispatchUsers({ type: dataActionsTypes.REMOVE_DATA, payload: { dataId } })
    }

    return (
      <DataContext.Provider
        value={{
            data,
            addData,
          removeData,
        }}>
        {children}
      </DataContext.Provider>
    )
  }
  
  export default useDataContext
