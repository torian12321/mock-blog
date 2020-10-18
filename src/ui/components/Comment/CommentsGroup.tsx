import React from 'react';
import { Comment } from './Comment';
// import { ICommentsGroup } from "./Comment.interfaces";
import styles from './Comment.module.scss';

const sortComments = (comments:any, parentId: any) => {
  const node: any = [];

  comments
    .filter((c:any) => c.parent_id === parentId)
    .forEach((c: any) => {
      c.comments = sortComments(comments, c.id);
      return node.push(c);
    })
  return node;
}

export const C = ({
  comment = {},
  level = 1,
}: any) => {
  const { id, user, date, content, comments = []} = comment;

  return (
    <div>
      <Comment
        key={id}
        user={user}
        date={date}
      >
        {content}
      </Comment>
      <div className={styles.comment_response}>
        {comments.map((c: any ={}) => (
          <C comment={c} level={level + 1} key={c.id} />
        ))}
      </div>
    </div>
  )
};

export const CommentsGroup = ({
  comments = [],
  loading = false,
}: any) => {
// }: ICommentsGroup) => {
  const com = sortComments(comments, null);
  
  return !loading ? (
    com.map((comment: any ={}) =>
      <C comment={comment} key={comment.id} />
  )) : <span>Loading...</span>
};

export default CommentsGroup;