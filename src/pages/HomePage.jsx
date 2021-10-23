import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/authSelectors";
import styles from './Pages.module.css';

const HomePage = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <div className={styles.homePageWrapper}>
            {isLoggedIn ? 
            <p className={styles.text}>
                You can use your <Link to="/contacts" className={styles.textLink}>Contacts</Link>
            </p> : 
            <p className={styles.text}>
                Welcome to our site. Please <Link to="/register" className={styles.textLink}>registrate</Link> your account 
                or <Link to="/login" className={styles.textLink}>log in</Link> if you done it yet.
            </p>
            }
        </div>
        
    )
}

export default HomePage;
 