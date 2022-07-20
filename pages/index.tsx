import { TabList, Tabs, Text, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import Parser from 'rss-parser';
import BlogField from '../components/BlogField';
import MyHead from '../components/MyHead';
import ZennPostsField, { Props } from '../components/ZennPostsField';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

const Home: NextPage<Props> = ({ zennPosts }) => {
  return (
    <>
      <MyHead title={TITLE} />
      <Text
        mt={'4.375rem'}
        fontSize={'3xl'}
        fontWeight={'semibold'}
        textAlign={'center'}
        color={'yellow.300'}
      >
        My Posts
      </Text>
      <Tabs mx={'15%'} mt={'5rem'} pb={'12.5rem'} colorScheme={'cyan'}>
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
