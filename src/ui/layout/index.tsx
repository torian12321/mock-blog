import React from 'react';
import Header from './Header';
import styles from './layout.module.scss';

export const Card = ({ children }: any) => (
  <div className={styles.wrapper}>
    <Header />
    {children}
  </div>
);

export default Card;