import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

export type Props = {
  zennPosts: Array<Feed>;
};

const ZennPostsField: NextPage<Props> = ({ zennPosts }) => {
  return (
    <Grid mt={'100px'} justifyItems={'center'} alignItems={'center'} gap={'40px'}>
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
  );
};

export default ZennPostsField;
