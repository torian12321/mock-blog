import React from 'react';
import classnames from 'classnames';
import { AddComment } from 'ui/components/AddComment';
// import { Button } from 'ui/components/Button';
import { IPost } from "./Post.interfaces";
import styles from './Post.module.scss';

export const Post = ({
  children,
  className,
  title,
  date,
  onAddComment,
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
        <AddComment onAddComment={onAddComment} />
        {/* {!!onAddComment &&
          <div>
            <Button
              caption="Add Comment"
              onClick={onAddComment}
              className={styles.btn}
            />
          </div>
        } */}
      </div>
    </div>
  );
};

export default Post;