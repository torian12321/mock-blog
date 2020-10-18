import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetPostById } from 'hooks/api/posts';
import { useCommentsState } from 'apiContext';

import { Post } from 'ui/components/Post';
import { CommentsGroup } from 'ui/components/Comment/CommentsGroup';

export const ViewArticle = () => {
  const { postId } = useParams();
  const [post] = useGetPostById(postId);
  const { comments, isFetching, actions } = useCommentsState(postId);

  useEffect(() => {
    actions.fetchCommnentByPostId(postId);
  }, []);

  return (
    <div className="container">
      <button onClick={() => actions.fetchCommnentByPostId(postId)}>
        click me
      </button>
      {/* {`${euro.shortName} has now a value of ${euro.rate}$`} */}
      <Post
        title={post.title}
        date={post.publish_date}
      >
        {post.content}
      </Post>
      <CommentsGroup
        comments={comments}
        loading={isFetching}
      />
    </div>
  );
};

export default ViewArticle;
