import useDataContext from "../../components/Context/UseContext";
import FormChat from "../../components/ui/Form/FormChat/FormLeaveQuestion";
import { urlComments } from "../../api/Contactsapi";
import { useEffect } from "react";
import styles from "./Chat_page.module.css";

function ChatPage() {
  const { commentState, setCommentState } = useDataContext();

  useEffect(() => {
    fetch(urlComments)
      .then((res) => res.json())
      .then((data) => setCommentState(data));
  }, []);

  return (
    <div className={styles.flex_container}>
      {commentState.length === 0 ? (
        <FormChat />
      ) : (
        <>
          <FormChat />
        </>
      )}
    </div>
  );
}

export default ChatPage;
