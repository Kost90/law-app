import styles from './Profilepage.module.css'
import useDataContext from '../../components/Context/UseContext';
import Login from './Login';
import ProfilePage from './ProfilePage';

function Profile() {

const { loginname } = useDataContext();


  return (
    <div className={styles.flex_container}>
        {loginname !== '' ?
            <ProfilePage/> :
            <Login/>
        }

    </div>
  )
}

export default Profile