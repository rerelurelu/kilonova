import type { GetStaticProps, NextPage } from 'next';
import Parser from 'rss-parser';
import BlogField from 'components/organisms/BlogField';
import client from 'graphql/config/ApolloClientConfig';
import { GET_POSTS_QUERY } from 'graphql/queries/GetPostsQuery';
import { BlogPost, Posts, ZennPost } from 'types/post';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

type Props = {
  posts: Posts;
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main className="px-12 pt-20 pb-60">
      <header className="m-header">
        <h1 className="text-center text-4xl font-normal tracking-widest">{TITLE}</h1>
      </header>
      <BlogField posts={posts} />
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();
  const feedZenn: ZennPost = await parser.parseURL(ZENN_FEED_URL);

  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  });

  const posts: Posts = [];

  feedZenn.items.map((post: ZennPost) => {
    posts.push({
      key: post.link.slice(-14),
      link: post.link,
      title: post.title,
      createdAt: post.isoDate.slice(0, 10),
      tags: ['zenn'],
    });
  });

  data.posts.map((post: BlogPost) => {
    posts.push({
      key: post.id,
      link: `/blog/${post.slug}`,
      title: post.title,
      createdAt: post.createdAt.slice(0, 10),
      tags: ['myself'],
    });
  });

  posts.sort((x, y) => (x.createdAt > y.createdAt ? -1 : 1));

  return {
    props: {
      posts: posts,
    },
  };
};
