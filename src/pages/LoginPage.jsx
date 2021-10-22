import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import { getErrorMessage } from '../redux/auth/authSelectors';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Alert from '@mui/material/Alert';
import styles from './Pages.module.css';

const INITIAL_VALUES = {
    email: "",
    password: "",
};

const Login = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector(getErrorMessage);
    const [showPassword, setShowPassword] = useState(false);

    const validate = useCallback((values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Password should contain more then 8 symbols';
        }

        return errors;
    }, []);

    const handleSubmit = useCallback((values, { setSubmitting }) => {
        dispatch(logIn(values));
        setSubmitting(false); 
    }, [dispatch]);

    const handleClickShowPassword = () => {
        setShowPassword(showPassword => !showPassword);
    };

    return (
        <div className={styles.authFormWrapper}>
            <h2 className={styles.authFormTitle}>Login form</h2>
            <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting, touched, errors, values, handleSubmit, handleBlur, handleChange }) => (
                <form onSubmit={handleSubmit} className={styles.authForm}>
                <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                />
                <Box sx={{ display: 'flex'}}>
                    <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    />
                    <Button 
                        onClick={handleClickShowPassword}
                    > 
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </Button>
                </Box>

                <Button 
                    color="primary" 
                    variant="contained" 
                    fullWidth type="submit"
                    disabled={
                        isSubmitting
                        || !(
                            Object.keys(touched).length ===
                            Object.keys(INITIAL_VALUES).length &&
                            Object.keys(errors).length === 0
                        )
                    }
                >
                Submit
                </Button>
            </form>
            )}
            </Formik>

            {errorMessage && <Alert severity="error">
                {errorMessage}
            </Alert>}
        </div>
    );
};

export { Login };