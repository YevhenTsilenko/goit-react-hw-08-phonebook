import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import styles from '../AuthNavigation/AuthNav.module.css';

const UserNavigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <div>
            <NavLink 
                to='/'
                exact
                className={styles.navLink}
                activeClassName={styles.navActiveLink}
            >
                Home
            </NavLink>

            {isLoggedIn &&
                <NavLink 
                    to='/contacts'
                    className={styles.navLink}
                    activeClassName={styles.navActiveLink}
                >
                    Contacts
                </NavLink>
            }
        </div>
    );
};

export { UserNavigation };