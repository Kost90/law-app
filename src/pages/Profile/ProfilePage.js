import React, { useEffect } from "react";
import { getComments } from "../../api/Contactsapi";
import FormChat from "../../components/ui/Form/FormChat/FormLeaveQuestion";
import QuestionWindow from "../../components/ui/QuestionWindow/QuestionWindow";
import useDataContext from "../../components/Context/UseContext";

function ProfilePage() {
  const { onDeleteComment, commentState, setCommentState, loginname } =
    useDataContext();

  useEffect(() => {
    fetchComments();
    async function fetchComments() {
      const data = await getComments();
      setCommentState(data);
    }
  }, []);

  return (
    <>
    <h1>Hello to your profile {loginname.name}</h1>
      <FormChat />
      <QuestionWindow
        data={commentState}
        onDeleteComment={onDeleteComment}
        logindata={loginname}
      />
    </>
  );
}

export default ProfilePage;
