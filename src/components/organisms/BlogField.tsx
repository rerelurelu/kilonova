import { NextPage } from 'next';
import PostCard from '../molecules/PostCard';
import { Post, Posts } from 'types/post';

type Props = {
  posts: Posts;
};

const BlogField: NextPage<Props> = ({ posts }) => {
  return (
    <section className="base:mt-24 mx-auto mt-16 grid  w-full max-w-screen-lg gap-8 sm:grid-cols-1 md:mt-36 md:grid-cols-2 lg:grid-cols-3">
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
