import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.scss';

export const Card = ({ children, className }: any) => (
  <div className={classnames(styles.card, className)}>
    {children}
  </div>
);

export default Card;