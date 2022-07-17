import { Box, Divider, Grid, ScaleFade, Text, VStack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import Parser from 'rss-parser';
import MyHead from '../components/MyHead';

const TITLE = 'Blog';
const ZENN_FEED_URL = `https://zenn.dev/astrologian/feed`;

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

type Props = {
  zennPosts: Array<Feed>;
};

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
        Posts
      </Text>
      <Grid
        mx={'15%'}
        pb={'200px'}
        mt={'100px'}
        justifyItems={'center'}
        alignItems={'center'}
        gap={'40px'}
      >
        {zennPosts.map((post) => {
          return (
            <NextLink href={post.link} key={post.link.slice(-14)}>
              <Box
                bg={'gray.800'}
                w={'80%'}
                maxW={'1000px'}
                h={'150px'}
                borderRadius={'15px'}
                pos={'relative'}
                cursor={'pointer'}
                transition={'transform .4s'}
                _hover={{ opacity: '0.75', transform: 'scale(1.05)' }}
              >
                <VStack spacing={'10px'} alignItems={'normal'} padding={'20px'}>
                  <Text fontSize={'lg'} fontWeight={'semibold'}>
                    {post.title}
                  </Text>
                  <Text
                    pos={'absolute'}
                    bottom={'5px'}
                    left={'20px'}
                    fontSize={'sm'}
                    color={'cyan.700'}
                  >
                    {post.isoDate.slice(0, 10)}
                  </Text>
                </VStack>
              </Box>
            </NextLink>
          );
        })}
      </Grid>
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
