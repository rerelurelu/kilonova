import { NextPage } from 'next';
import PostCard from '../molecules/PostCard';
import { Post, Posts } from '../../types/post';

type Props = {
  posts: Posts;
};

const BlogField: NextPage<Props> = ({ posts }) => {
  return (
    <section className="base:mt-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid md:mt-36 gap-8 w-full max-w-screen-lg mx-auto">
      {posts.map((post: Post) => {
        return (
          <PostCard
            key={post.key}
            title={post.title}
            href={post.link}
            createdAt={post.createdAt}
            tags={post.tags}
          />
        );
      })}
    </section>
  );
};

export default BlogField;
