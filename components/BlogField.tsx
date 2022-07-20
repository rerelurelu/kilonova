import { useQuery } from '@apollo/client';
import { Box, Grid, Skeleton, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { GET_POSTS_QUERY } from '../graphql/queries/GetPostsQuery';

// 記事数によって変える（最大4 or 5必要）
const skeletonNum: number[] = [1];

const BlogField: NextPage = () => {
  const { data, loading } = useQuery(GET_POSTS_QUERY);

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
              <NextLink href={`/blog/${post.slug}`} key={post.id}>
                <Box
                  bg={'gray.800'}
                  w={'80%'}
                  maxW={'1000px'}
                  h={'150px'}
                  borderRadius={'15px'}
                  pos={'relative'}
                  cursor={'pointer'}
                  boxShadow={'lg'}
                  transition={'transform .4s'}
                  transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
                  _hover={{ transform: 'scale(1.02)' }}
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
