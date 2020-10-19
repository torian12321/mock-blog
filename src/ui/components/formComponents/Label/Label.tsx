import React from 'react';
import { ILabel } from "./Label.interfaces";

export const Label = ({
  children,
  caption,
  htmlFor,
  className,
}: ILabel) => {
  const content = children || caption;

  return !!content ? (
    <label htmlFor={htmlFor} className={className}>{content}</label>
  ) : null
};

export default Label;