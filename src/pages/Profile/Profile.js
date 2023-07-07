import React, {useState} from 'react';
import Login from './Login';
import ProfilePage from './ProfilePage';

function Profile() {

    const [loggedOn, setLoggedOn] = useState(false);

    // login - name: save this in state that is accessible everywhere
        //input, button

    // profile -  get that name and then grab all commments that match that name
        //comment

  return (
    <div>
        {loggedOn ?
            <ProfilePage/> :
            <Login setLoggedOn={setLoggedOn}/>
        }

    </div>
  )
}

export default Profile