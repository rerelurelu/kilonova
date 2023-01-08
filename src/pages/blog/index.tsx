import type { GetStaticProps, NextPage } from 'next';
import Parser from 'rss-parser';

import RootLayout from '@/components/layout';
import BlogField from '@/components/model/blogField';
import { BLOG } from '@/const/seo';
import { ZENN_FEED_URL } from '@/const/url';
import client from '@/graphql/config/ApolloClientConfig';
import { GET_POSTS_QUERY } from '@/graphql/queries/GetPostsQuery';
import { BlogPost, Posts, ZennPost } from '@/types/post';

type Props = {
  posts: Posts;
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <RootLayout title={BLOG.TITLE} description={BLOG.DESCRIPTION}>
      <header className='m-header md:m-header-md'>
        <h1 className='text-center text-4xl font-normal tracking-widest text-white'>
          {BLOG.TITLE}
        </h1>
      </header>
      <BlogField posts={posts} />
    </RootLayout>
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
