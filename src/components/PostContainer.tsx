import React from 'react';
import type { FC } from 'react';
import { postAPI } from '../service/PostService';
import PostItem from './PostItem';

const PostContainer: FC = () => {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <div className='post__list'>
        {posts && posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;

