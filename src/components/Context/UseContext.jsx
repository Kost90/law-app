import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reduser/dataReducer";
import { dataActionsTypes } from "../reduser/dataActiontypes";
import {
  addReview,
  addComments,
  deleteComment,
} from "../../api/Contactsapi";

export const DataContext = createContext();

const initialData = null;

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (typeof context === "undefined") {
    throw new Error("useDataContext must be used into DataProvider!");
  }

  return context;
};

export const DataProvider = ({ children }) => {
  const [commentState, setCommentState] = useState([]);
  const [review, setReview] = useState([]);
  const [loginname, setLoginname] = useState('');
  const [open, setOpen] = useState(false);

  const postComment = (comment) => {
    addComments(comment);

    setCommentState((prev) => [...prev, comment]);
  };

  const postReview = (review) => {
    addReview(review);

    setReview((prev) => [...prev, review]);
  };

  const onDeleteComment = (id, element) => {
    deleteComment(id);
    setCommentState((prev) =>
      prev.filter((comment) => comment.delete !== element)
    );
  };

  // =========================REDUCER===========================================//
  const [{ data }, dispatchUsers] = useReducer(dataReducer, {
    data: initialData,
  });

  const addbookData = (newData) => {
    dispatchUsers({
      type: dataActionsTypes.ADD_BOOKDATA,
      payload: { newData },
    });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        commentState,
        setCommentState,
        loginname,
        setLoginname,
        review,
        setReview,
        postComment,
        postReview,
        addbookData,
        onDeleteComment,
        open,
        setOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default useDataContext;
