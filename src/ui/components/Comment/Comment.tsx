import React from 'react';
import classnames from 'classnames';
import { AddComment } from 'ui/components/AddComment';
import { IComment } from "./Comment.interfaces";
import styles from './Comment.module.scss';

export const Comment = ({
  children,
  className,
  user,
  date,
  onAddComment,
}: IComment) => (
  <div className={classnames(
    styles.comment,
    className,
  )}>
    <div className={styles.body}>
      <span className={styles.header}>
        {user} - <span className={styles.header_date}>{date}</span>
      </span>
      <span className={styles.content}>
        {children}
      </span>
      <AddComment onAddComment={onAddComment} />
    </div>
  </div>
);

export default Comment;