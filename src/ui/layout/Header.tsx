import React from 'react';
import { Link } from "react-router-dom";
import styles from './layout.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className='container'>
      <Link to="/">Home</Link>
    </div>
  </header>
);

export default Header;
