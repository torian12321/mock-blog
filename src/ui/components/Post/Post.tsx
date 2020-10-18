import React from 'react';
import classnames from 'classnames';
import { IPost } from "./Post.interfaces";
import styles from './Post.module.scss';

export const Post = ({
  children,
  className,
  title,
  date,
}: IPost) => {
  function createMarkup() {
    return {__html: children};
  }

  return (
    <div className={classnames(styles.post, className)}>
      <div className={styles.body}>
        <span className={styles.header}>
          {title}
          <span className={styles.date}>
            {date}
          </span>
        </span>
        <span className={styles.content}>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </span>
      </div>
    </div>
  );
};

export default Post;