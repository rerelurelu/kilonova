import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { GET_POSTS_QUERY } from '../../graphql/queries/GetPostsQuery';
import { BlogPost } from '../../types/props';
import PostCard from '../molecules/PostCard';
import PostsFieldLayout from '../templates/PostsFieldLayout';
import SkeletonCard from '../molecules/SkeletonCard';

// PostCardのスケルトンの数
const skeletonNum: number[] = [];

for (let i = 0; i < 2; i++) {
  skeletonNum.push(i);
}

const BlogField: NextPage = () => {
  const { data, loading } = useQuery(GET_POSTS_QUERY);

  return (
    <PostsFieldLayout>
      {loading
        ? skeletonNum.map((num) => {
            return <SkeletonCard key={num} />;
          })
        : data.posts.map((post: BlogPost) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                href={`/blog/${post.slug}`}
                createdAt={post.createdAt.slice(0, 10)}
              />
            );
          })}
    </PostsFieldLayout>
  );
};

export default BlogField;
