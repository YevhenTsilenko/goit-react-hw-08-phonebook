import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { Loader } from './components/Loader/Loader';
import { Appbar } from './components/Appbar/Appbar';
import{ getCurrentUser } from './redux/auth/authOperations';
import{ getIsRefreshingUser } from './redux/auth/authSelectors';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const NoSuchPage = lazy(() => import('./pages/ErrorPage'));
const Registration = lazy(() => import('./pages/RegistrationPage'));
const Login = lazy(() => import('./pages/LoginPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

function App () {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <div className="App">
        <Appbar />
        
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <Registration />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <Phonebook />
            </PrivateRoute>

            <Route component={NoSuchPage} />
          </Switch>
        </Suspense>
      </div>
    )
  )
};

export default App;


