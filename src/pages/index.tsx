import { TabList, Tabs, Tab, TabPanels, TabPanel, Heading, useColorMode } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import Parser from 'rss-parser';
import BlogField from '../components/organisms/BlogField';
import MyHead from '../components/molecules/MyHead';
import ZennPostsField from '../components/organisms/ZennPostsField';
import { PostsProps } from '../types/props';
import client from '../graphql/config/ApolloClientConfig';
import { GET_POSTS_QUERY } from '../graphql/queries/GetPostsQuery';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

const Home: NextPage<PostsProps> = ({ zennPosts, blogPosts }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <MyHead title={TITLE} />
      <Heading
        as={'h1'}
        mt={'4.375rem'}
        fontSize={'3xl'}
        fontWeight={'semibold'}
        textAlign={'center'}
        color={'yellow.400'}
        cursor={'default'}
      >
        My Posts
      </Heading>
      <Tabs
        mx={{ base: '5%', md: '15%' }}
        mt={'5rem'}
        pb={{ base: '4rem', md: '12.5rem' }}
        color={colorMode === 'light' ? 'cyan.300' : 'cyan.600'}
        colorScheme={'cyan'}
      >
        <TabList>
          <Tab>Blog</Tab>
          <Tab>Zenn</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BlogField blogPosts={blogPosts} />
          </TabPanel>
          <TabPanel>
            <ZennPostsField zennPosts={zennPosts} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
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
