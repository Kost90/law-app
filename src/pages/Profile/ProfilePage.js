import React, { useEffect } from 'react'
import { getComments } from '../../api/Contactsapi'
import FormChat from '../../components/ui/Form/FormChat/FormChat';
import QuestionWindow from '../../components/ui/QuestionWindow/QuestionWindow'
import useDataContext from '../../components/Context/UseContext';

function ProfilePage() {

  const { onDeleteComment, commentState, setCommentState, loginname } = useDataContext();


    useEffect(() => {
        fetchComments();
        async function fetchComments() {
            const data = await getComments();
            setCommentState(data);
        }
    }, [])


  //   const showComments = commentState.map(c => {
  //   <div>
  //   <h1 key={c.id}>{c.name}</h1>
  //   <h2 key={c.id}>{c.text}</h2>
  //   </div>
  // })

  return (
    <>
    <FormChat/>
    <QuestionWindow 
    data={commentState}
    onDeleteComment={onDeleteComment}
    logindata={loginname}
    />
    {/* <div>
      <h1>Your messages:</h1>
        {showComments}
    </div> */}
    </>

  )
}

export default ProfilePage