import React from 'react';
import { Link } from "react-router-dom";
import styles from './layout.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav className='container'>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
