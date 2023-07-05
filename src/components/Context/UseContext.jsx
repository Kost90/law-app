import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reduser/dataReducer";
import { dataActionsTypes } from "../reduser/dataActiontypes";
import { addContact } from "../../api/Contactsapi";

export const DataContext = createContext();

const initialData = null;

const contactData = [];

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (typeof context === "undefined") {
    throw new Error("useDataContext must be used into DataProvider!");
  }

  return context;
};

export const DataProvider = ({ children }) => {
  const [contactstate, setcontactstate] = useState(contactData);

  console.log(contactstate);

  const postContact = (contact) => {
    addContact(contact)

    setcontactstate((prev) => [...prev, contact]);
  };

  const [{ data }, dispatchUsers] = useReducer(dataReducer, {
    data: initialData,
  });

  const addbookData = (newData) => {
    // fetch()
    dispatchUsers({
      type: dataActionsTypes.ADD_BOOKDATA,
      payload: { newData },
    });
  };

  const removeData = (dataId) => {
    // fetch()
    dispatchUsers({ type: dataActionsTypes.REMOVE_DATA, payload: { dataId } });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        contactstate,
        postContact,
        addbookData,
        removeData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default useDataContext;
