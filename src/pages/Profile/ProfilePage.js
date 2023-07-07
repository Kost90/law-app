import React, { useEffect, useState } from 'react'
import { getComments } from '../../api/Contactsapi'

function ProfilePage() {

    let [comments,setComments] = useState([])

    useEffect(() => {
        fetchComments();
        async function fetchComments() {
            const data = await getComments();
            console.log(data);
            setComments(data);
        }
    }, [])


    const showComments = comments.map(c => <h2 key={c.comment}>{c.comment}</h2>)

  return (
    <div>
        {showComments}
    </div>
  )
}

export default ProfilePage