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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddComment = () => {
    actions.addComment({
      "postId": postId,
      "parent_id": null,
      "user": "Jakeee",
      "content": "Cras lectus nisl, scelerisque quis elit ut, luctus scelerisque purus."
    });
  }

  return (
    <div className="container">
      {/* {`${euro.shortName} has now a value of ${euro.rate}$`} */}
      <Post
        title={post.title}
        date={post.publish_date}
        onAddComment={handleAddComment}
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
