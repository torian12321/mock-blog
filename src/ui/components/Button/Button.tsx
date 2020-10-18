import React from 'react';
import classnames from 'classnames';
import { IButton } from "./Button.interfaces";
import styles from './Button.module.scss';

export const Button = ({
  children,
  caption,
  className,
  onClick,
  disabled = false,
}: IButton) => {
  const content = children || caption;
  const handleOnClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return content ? (
    <button
      onClick={handleOnClick}
      className={classnames(styles.btn, className)}
    >
      {content}
    </button>
  ) : null;
};

export default Button;