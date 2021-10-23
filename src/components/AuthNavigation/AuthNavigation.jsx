import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

function AuthNavigation() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.navLink}
        activeClassName={styles.activeNAvLink}
      >
        Signup
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
      >
        Login
      </NavLink>
    </div>
    );
}

export { AuthNavigation };