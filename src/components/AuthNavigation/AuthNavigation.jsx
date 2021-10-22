import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

function AuthNavigation() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Signup
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
    );
}

export { AuthNavigation };