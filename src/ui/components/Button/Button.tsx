import React from 'react';
import classnames from 'classnames';
import { IButton } from "./Button.interfaces";
import styles from './Button.module.scss';

export const Button = ({
  children,
  caption,
  className,
  onClick,
  type = 'submit',
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
      type={type}
      onClick={handleOnClick}
      className={classnames(
        styles.btn,
        disabled && styles.btn_disabled,
        className,
      )}
      disabled={disabled}
    >
      {content}
    </button>
  ) : null;
};

export default Button;