import { Redirect } from 'react-router-dom';
import styles from './Pages.module.css';

function ErrorPage () {
    return (
        <>
            <p className={styles.text}>404 Page doesn't exist</p>
            <Redirect to={"/"} />
        </>
    )
};

export default ErrorPage;