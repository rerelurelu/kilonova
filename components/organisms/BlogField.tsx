import { NextPage } from 'next';
import { BlogFieldProps, BlogPost } from '../../types/props';
import PostCard from '../molecules/PostCard';
import PostsFieldLayout from '../templates/PostsFieldLayout';

const BlogField: NextPage<BlogFieldProps> = ({ blogPosts }) => {
  return (
    <PostsFieldLayout>
      <>
        {blogPosts.map((post: BlogPost) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              href={`/blog/${post.slug}`}
              createdAt={post.createdAt.slice(0, 10)}
            />
          );
        })}
      </>
    </PostsFieldLayout>
  );
};

export default BlogField;
