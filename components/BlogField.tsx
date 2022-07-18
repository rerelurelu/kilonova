import { gql, useQuery } from '@apollo/client';
import { Box, Grid, Skeleton, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

// 記事数によって変える（最大4 or 5必要）
const skeletonNum: number[] = [1];

const BlogField: NextPage = () => {
  const { data, loading } = useQuery(POSTS);

  return (
    <Grid mt={'100px'} justifyItems={'center'} alignItems={'center'} gap={'40px'}>
      {loading
        ? skeletonNum.map((num) => {
            return (
              <Box
                key={num}
                bg={'gray.800'}
                w={'80%'}
                maxW={'1000px'}
                h={'150px'}
                borderRadius={'15px'}
                pos={'relative'}
              >
                <VStack spacing={'10px'} alignItems={'normal'} padding={'20px'}>
                  <Skeleton
                    startColor="cyan.100"
                    endColor="cyan.300"
                    h={'30px'}
                    borderRadius={'10px'}
                  />
                  <Skeleton
                    startColor="cyan.100"
                    endColor="cyan.300"
                    h={'15px'}
                    w={'20%'}
                    maxW={'200px'}
                    borderRadius={'5px'}
                    pos={'absolute'}
                    bottom={'10px'}
                    left={'20px'}
                    fontSize={'sm'}
                    color={'cyan.700'}
                  />
                </VStack>
              </Box>
            );
          })
        : data.posts.map((post: any) => {
            return (
              <NextLink href={post.id} key={post.id}>
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
                      {post.createdAt.slice(0, 10)}
                    </Text>
                  </VStack>
                </Box>
              </NextLink>
            );
          })}
    </Grid>
  );
};

export default BlogField;

const POSTS = gql`
  query MyQuery {
    posts {
      createdAt
      title
      content {
        html
      }
      id
    }
  }
`;
