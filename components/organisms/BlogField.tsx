import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { GET_POSTS_QUERY } from '../../graphql/queries/GetPostsQuery';
import { BlogPost } from '../../types/props';
import PostCard from '../molecules/PostCard';
import PostsFieldLayout from '../templates/PostsFieldLayout';
import SkeletonCard from '../molecules/SkeletonCard';

// 記事数によって変える（最大4 or 5必要）
const skeletonNum: number[] = [1];

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
