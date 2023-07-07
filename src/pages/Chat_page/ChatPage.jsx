import useDataContext from "../../components/Context/UseContext";
import ChatWindow from "../../components/ui/ChatWindow/ChatWindow";
import FormChat from "../../components/ui/Form/FormChat/FormChat";
import { urlComments } from "../../api/Contactsapi";
import { useEffect } from "react";
import styles from './Chat_page.module.css'

function ChatPage() {
  const { onDeleteComment, commentState, setCommentState } = useDataContext();



  // ===========Как это правильно вынести в apicomponent в функцию getcomments?===========
  useEffect(() => {
    fetch(urlComments)
      .then((res) => res.json())
      .then((data) => setCommentState(data));
  }, []);



  
  return (
    <div className={styles.flex_container}>
    <h1>LEAVE YOUR QUESTION</h1>
      {commentState.length === 0 ? (
        <FormChat />
      ) : (
        <>
          <FormChat />
          <ChatWindow data={commentState} onDeleteComment={onDeleteComment} />
        </>
      )}
      </div>
  );
}

export default ChatPage;
