import React from 'react';
import classnames from 'classnames';
import { Field as RFFField } from 'react-final-form';
import { Label } from 'ui/components/formComponents/Label';
import { IField } from "./Field.interfaces";
import styles from './Field.module.scss';

export const Field = ({
  name,
  label,
  placeholder,
  type = 'text',
  className,
}: IField) => (
  <div className={classnames(styles.wrapper, className)}>
    <div className={styles.content}>
      <Label htmlFor={name} caption={label} className={styles.label} />
      <RFFField
        className={styles.field}
        name={name}
        component={type === 'textarea' ? 'textarea' : "input"}
        type={type}
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Field;