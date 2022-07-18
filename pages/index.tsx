import { TabList, Tabs, Text, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import Parser from 'rss-parser';
import MyHead from '../components/MyHead';
import ZennPostsField, { Props } from '../components/ZennPostsField';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

const Home: NextPage<Props> = ({ zennPosts }) => {
  return (
    <>
      <MyHead title={TITLE} />
      <Text
        mt={'70px'}
        fontSize={'3xl'}
        fontWeight={'semibold'}
        textAlign={'center'}
        color={'yellow.300'}
      >
        My Posts
      </Text>
      <Tabs mx={'15%'} mt={'80px'} pb={'200px'} colorScheme={'cyan'}>
        <TabList>
          <Tab>Blog</Tab>
          <Tab>Zenn</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>Blog</Text>
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

  return {
    props: {
      zennPosts: feedZenn.items,
    },
  };
};
