import { TabList, Tabs, Tab, TabPanels, TabPanel, Heading } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import Parser from 'rss-parser';
import BlogField from '../components/organisms/BlogField';
import MyHead from '../components/molecules/MyHead';
import ZennPostsField from '../components/organisms/ZennPostsField';
import { ZennPostsProps } from '../types/props';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

const Home: NextPage<ZennPostsProps> = ({ zennPosts }) => {
  return (
    <>
      <MyHead title={TITLE} />
      <Heading
        as={'h1'}
        mt={'4.375rem'}
        fontSize={'3xl'}
        fontWeight={'semibold'}
        textAlign={'center'}
        color={'yellow.300'}
        cursor={'default'}
      >
        My Posts
      </Heading>
      <Tabs
        mx={{ base: '5%', md: '15%' }}
        mt={'5rem'}
        pb={{ base: '4rem', md: '12.5rem' }}
        colorScheme={'cyan'}
      >
        <TabList>
          <Tab>Blog</Tab>
          <Tab>Zenn</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BlogField />
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

export const getServerSideProps: GetServerSideProps = async () => {
  const parser = new Parser();
  const feedZenn = await parser.parseURL(ZENN_FEED_URL);

  return {
    props: {
      zennPosts: feedZenn.items,
    },
  };
};
