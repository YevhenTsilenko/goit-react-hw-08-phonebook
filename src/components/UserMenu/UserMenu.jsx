import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getUsername } from '../../redux/auth/authSelectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);

    return (
        <div className={styles.UserMenu}>

            <p className={styles.userGreating}>{name}, it's your private office.</p>
            <button 
                className={styles.logOutBtn}
                onClick={() => dispatch(logOut())}
            >
                Log out
            </button>
        </div>
    )
};

export { UserMenu };