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
    <Grid mt={'6.25rem'} justifyItems={'center'} alignItems={'center'} gap={'2.5rem'}>
      {zennPosts.map((post) => {
        return (
          <NextLink href={post.link} key={post.link.slice(-14)}>
            <Box
              bg={'gray.800'}
              w={'80%'}
              maxW={'1000px'}
              h={'150px'}
              borderRadius={'0.9375rem'}
              pos={'relative'}
              cursor={'pointer'}
              boxShadow={'lg'}
              transition={'transform .4s'}
              transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
              _hover={{ transform: 'scale(1.02)' }}
            >
              <VStack spacing={'0.625rem'} alignItems={'normal'} padding={'1.25rem'}>
                <Text fontSize={'lg'} fontWeight={'semibold'}>
                  {post.title}
                </Text>
                <Text
                  pos={'absolute'}
                  bottom={'0.3125rem'}
                  left={'1.25rem'}
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
