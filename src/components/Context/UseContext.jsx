import { createContext, useContext, useReducer } from 'react'
import { dataReducer } from '../reduser/dataReducer';
import { dataActionsTypes } from '../reduser/dataActiontypes';

export const DataContext = createContext()

const initialData = null;


export const useDataContext = () => {

    const context = useContext(DataContext)

if (typeof context === 'undefined') {
    throw new Error('useDataContext must be used into DataProvider!')
  }

  return context
}

export const DataProvider = ({ children }) => {
  // Datareducer это фаил со свитчами которые будут выполнятся
    const [{ data }, dispatchUsers] = useReducer(dataReducer, {
      data: initialData,
    })
    
    // Это функции которые передаем в datareducer и которые будут выполнятся в случае свопадения в кейсе
    const addbookData = newData => {
      // fetch()
      dispatchUsers({ type: dataActionsTypes.ADD_BOOKDATA, payload: { newData } })
    }
  
    // dataActionstype фаил где перечисляются названия для кейсов
    const removeData = dataId => {
      // fetch()
      dispatchUsers({ type: dataActionsTypes.REMOVE_DATA, payload: { dataId } })
    }

    return (
      <DataContext.Provider
        value={{
          data,
          addbookData,
          removeData,
        }}>
        {children}
      </DataContext.Provider>
    )
  }
  
  export default useDataContext
