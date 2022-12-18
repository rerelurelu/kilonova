import type { GetStaticProps, NextPage } from 'next';
import Parser from 'rss-parser';
import BlogField from '../components/organisms/BlogField';
import MyHead from '../components/molecules/MyHead';
import ZennPostsField from '../components/organisms/ZennPostsField';
import { PostsProps } from '../types/props';
import client from '../graphql/config/ApolloClientConfig';
import { GET_POSTS_QUERY } from '../graphql/queries/GetPostsQuery';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

const Home: NextPage<PostsProps> = ({ zennPosts, blogPosts }) => {
  return <></>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();
  const feedZenn = await parser.parseURL(ZENN_FEED_URL);

  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  });

  return {
    props: {
      zennPosts: feedZenn.items,
      blogPosts: data.posts,
    },
  };
};
