import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import MyHead from '../../components/molecules/MyHead';
import { ApolloClientConfig } from '../../graphql/config/ApolloClientConfig';
import { GET_POST_QUERY } from '../../graphql/queries/GetPostQuery';
import style from '../../style/post.module.scss';

const Blog: NextPage<any> = ({ post }) => {
  return (
    <>
      <MyHead title={post.title} />
      <Flex
        as="article"
        mt={'100px'}
        pb={'200px'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        mx={'auto'}
        w={'80%'}
        maxW={'800px'}
      >
        <Heading color={'cyan.500'} w={'100%'} textAlign={'center'}>
          {post.title}
        </Heading>
        <Box mt={'50px'}>
          <Text textAlign={'center'} fontSize={'sm'}>
            Published
          </Text>
          <Text mt={'5px'} color={'cyan.500'}>
            {post.createdAt.slice(0, 10)}
          </Text>
        </Box>
        <Divider mt={'30px'} />
        <ReactMarkdown className={style.markdown}>{post.content}</ReactMarkdown>
      </Flex>
    </>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const { data } = await ApolloClientConfig.query({
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
