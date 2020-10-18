import React from 'react';
import { Link } from "react-router-dom";
import { useGetPosts } from 'hooks/api/posts';
import { Post } from 'ui/components/Post';

const PostItem = ({ data }: any) => (
  <Post
    key={data.id}
    title={data.title}
    date={data.publish_date}
  >
    {data.content}
  </Post>
);

export const ViewHome = () => {
  const [posts, isLoading] = useGetPosts();

  return (
    <div className="container">
      {(!!posts && !isLoading) && posts.map((post: any ={}) =>
        <Link to={`/article/${post.id}`} key={post.id}>
          <PostItem data={post} />
        </Link>
      )}
    </div>
  );
};

export default ViewHome;
