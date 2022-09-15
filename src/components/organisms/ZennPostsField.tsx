import { NextPage } from 'next';
import { ZennPostsProps } from '../../types/props';
import PostCard from '../molecules/PostCard';
import PostsFieldLayout from '../templates/PostsFieldLayout';

const ZennPostsField: NextPage<ZennPostsProps> = ({ zennPosts }) => {
  return (
    <PostsFieldLayout>
      <>
        {zennPosts.map((post) => {
          return (
            <PostCard
              key={post.link.slice(-14)}
              href={post.link}
              title={post.title}
              createdAt={post.isoDate.slice(0, 10)}
            />
          );
        })}
      </>
    </PostsFieldLayout>
  );
};

export default ZennPostsField;
