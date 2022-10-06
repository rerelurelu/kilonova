import { Box, Flex, Heading, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import MyHead from '../../components/molecules/MyHead';
import AuthField from '../../components/organisms/AuthField';
import { MarkdownTemplate } from '../../components/templates/MarkdownTemplate';
import client from '../../graphql/config/ApolloClientConfig';
import { GET_POST_QUERY } from '../../graphql/queries/GetPostQuery';
import { GET_POSTS_QUERY } from '../../graphql/queries/GetPostsQuery';
import { haveAuthState } from '../../states/atoms/haveAuth';
import { BlogPost } from '../../types/props';
import { convertDateDisplay } from '../../utils/convertDateDisplay';

const Blog: NextPage<any> = ({ post }) => {
  const fcTitle = useColorModeValue('fc.title', 'fcDark.title');
  const fcMain = useColorModeValue('fc.main', 'fcDark.main');
  const borderColor = useColorModeValue('cyan.600', 'cyan.200');
  const [isSecret, setIsSecret] = useState<boolean>(post.isSecret);
  const dateDisplay = convertDateDisplay(post.createdAt.slice(0, 10));
  const haveAuth = useRecoilValue(haveAuthState);

  if (haveAuth && isSecret) {
    setIsSecret(false);
  }

  return (
    <>
      {isSecret ? (
        <AuthField setIsSecret={setIsSecret} />
      ) : (
        <>
          <MyHead title={post.title} />
          <Flex
            as="article"
            mt={'6.25rem'}
            pb={{ base: '4rem', md: '12.5rem' }}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            mx={'auto'}
            w={'80%'}
            maxW={'800px'}
            color={fcMain}
          >
            <Heading color={fcTitle} w={'100%'} textAlign={'center'}>
              {post.title}
            </Heading>
            <Box
              width={'100%'}
              mt={'3.125rem'}
              pb={'5rem'}
              color={'cyan.600'}
              borderBottom={'0.0625rem'}
              borderStyle={'solid'}
              borderColor={borderColor}
            >
              <Text textAlign={'center'} fontSize={'sm'}>
                Published
              </Text>
              <Text textAlign={'center'} mt={'0.3125rem'}>
                {dateDisplay}
              </Text>
            </Box>
            <MarkdownTemplate content={post.content} />
          </Flex>
        </>
      )}
    </>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  });
  const paths = data.posts.map((post: BlogPost) => `/blog/${post.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data } = await client.query({
    query: GET_POST_QUERY,
    variables: {
      slug: params.post,
    },
  });

  return {
    props: {
      post: data.posts[0],
    },
  };
};
