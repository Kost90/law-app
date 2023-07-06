import useDataContext from "../../components/Context/UseContext";
import ChatWindow from "../../components/ui/ChatWindow/ChatWindow";
import FormChat from "../../components/ui/Form/FormChat/FormChat";
import { urlComments } from "../../api/Contactsapi";
import { useEffect } from "react";

function ChatPage() {
  const { onDeleteComment, commentState, setCommentState } = useDataContext();



  // ===========Как это правильно вынести в apicomponent в функцию getcomments?===========
  useEffect(() => {
    fetch(urlComments)
      .then((res) => res.json())
      .then((data) => setCommentState(data));
  }, []);



  
  return (
    <>
      <div>LEAVE YOUR MESSAGE</div>
      {commentState.length === 0 ? (
        <FormChat />
      ) : (
        <>
          <ChatWindow data={commentState} onDeleteComment={onDeleteComment} />
          <FormChat />
        </>
      )}
    </>
  );
}

export default ChatPage;