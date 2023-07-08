import React, { useEffect } from "react";
import { getComments } from "../../api/Contactsapi";
import FormChat from "../../components/ui/Form/FormChat/FormLeaveQuestion";
import QuestionWindow from "../../components/ui/QuestionWindow/QuestionWindow";
import useDataContext from "../../components/Context/UseContext";
import styles from './Profilepage.module.css'

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
    <div className={styles.flex_container}>
    <h1>HELLO TO YOUR PROFILE: {loginname.name}</h1>
      <FormChat />
      <QuestionWindow
        data={commentState}
        onDeleteComment={onDeleteComment}
        logindata={loginname}
      />
    </div>
    </>
  );
}

export default ProfilePage;
