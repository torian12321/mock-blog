import React from 'react';
import { useParams } from "react-router-dom";
import { useGetPostById } from 'hooks/api/posts';
import { useGetCommentsByPostId } from 'hooks/api/comments';

import { Post } from 'ui/components/Post';
import { CommentsGroup } from 'ui/components/Comment/CommentsGroup';

export const ViewArticle = (props: any) => {
  const { postId } = useParams();

  const [post] = useGetPostById(postId);
  const [comments, commentsIsLoading] = useGetCommentsByPostId(postId);

  return (
    <div className="container">
      <Post
        title={post.title}
        date={post.publish_date}
      >
        {post.content}
      </Post>
      <CommentsGroup
        comments={comments}
        loading={commentsIsLoading}
      />
    </div>
  );
};

export default ViewArticle;
