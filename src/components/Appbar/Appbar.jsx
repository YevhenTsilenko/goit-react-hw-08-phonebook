import { useSelector } from "react-redux";
import {UserNavigation} from "../UserNavigation/UserNavigation";
import {AuthNavigation} from "../AuthNavigation/AuthNavigation";
import {UserMenu} from "../UserMenu/UserMenu";
import styles from './Appbar.module.css';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const Appbar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <header className={styles.header}>
            <UserNavigation />
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </header>
    );
};

export { Appbar };