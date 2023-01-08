import type { GetStaticProps, NextPage } from 'next';
import Parser from 'rss-parser';

import RootLayout from '@/components/layout';
import BlogField from '@/components/model/blogField';
import { HOME } from '@/const/seo';
import { ZENN_FEED_URL } from '@/const/url';
import client from '@/graphql/config/ApolloClientConfig';
import { GET_RECENT_POSTS_QUERY } from '@/graphql/queries/GetRecentPostsQuery';
import { BlogPost, Posts, ZennPost } from '@/types/post';

const description = {
  para1: `Welcome to my site!`,
  para2: `I'm zoniha.`,
  para3: `I live in Tokyo, Japan.`,
} as const;

type Props = {
  posts: Posts;
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <RootLayout title={HOME.TITLE} description={HOME.DESCRIPTION}>
      <header className='m-header md:m-header-md md:grid md:justify-items-center'>
        <div className='mockup-code bg-violet-300 pb-12 tracking-tight md:w-[80%]'>
          <pre data-prefix='1'>
            <code>{description.para1}</code>
          </pre>
          <pre data-prefix='2'>
            <code>{description.para2}</code>
          </pre>
          <pre data-prefix='3'>
            <code>{description.para3}</code>
          </pre>
        </div>
      </header>
      <div className='mt-28 sm:mt-32 md:mt-44'>
        <BlogField posts={posts} />
      </div>
    </RootLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();
  const feedZenn: ZennPost = await parser.parseURL(ZENN_FEED_URL);

  const { data } = await client.query({
    query: GET_RECENT_POSTS_QUERY,
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
      posts: posts.slice(0, 3),
    },
  };
};
