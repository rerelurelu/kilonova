import { Box, Button, Divider, Flex, Grid, Heading, Input, Spacer, Text } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState, ChangeEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import MyHead from '../../components/molecules/MyHead';
import { ApolloClientConfig } from '../../graphql/config/ApolloClientConfig';
import { GET_POST_QUERY } from '../../graphql/queries/GetPostQuery';
import style from '../../style/post.module.scss';

const Blog: NextPage<any> = ({ post }) => {
  const [password, setPassword] = useState<string>('');
  const [isSecret, setIsSecret] = useState<boolean>(post.isSecret);
  const [isError, setIsError] = useState<boolean>(false);
  console.log(post);

  const handleEnter = useCallback((password: string) => {
    if (password === process.env.NEXT_PUBLIC_POST_PASSWORD) {
      setIsSecret(false);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, []);

  return (
    <>
      {isSecret ? (
        <>
          <MyHead title={'SECURITY ROOM'} />
          <Grid mt={'13rem'} justifyItems={'center'} alignItems={'center'}>
            {isError ? (
              <Text color={'red.500'} mb={'5rem'} fontSize={'2xl'} fontWeight={'bold'}>
                👻 something went wrong 👻
              </Text>
            ) : (
              <Spacer mb={'7.25rem'} />
            )}
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              variant="flushed"
              color={'cyan.600'}
              type={'password'}
              w={'50%'}
              maxW={'25rem'}
              textAlign={'center'}
              autoFocus={true}
              borderColor={'cyan.600'}
              _focus={{ borderColor: 'cyan.600', shadow: 'none' }}
            />
            <Button
              bg={'cyan.600'}
              mt={'7rem'}
              w={'20%'}
              maxW={'150px'}
              color={'yellow.300'}
              fontWeight={'bold'}
              _hover={{ opacity: '0.75' }}
              onClick={() => handleEnter(password)}
            >
              ENTER
            </Button>
          </Grid>
        </>
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
          >
            <Heading color={'cyan.500'} w={'100%'} textAlign={'center'}>
              {post.title}
            </Heading>
            <Box mt={'3.125rem'}>
              <Text textAlign={'center'} fontSize={'sm'}>
                Published
              </Text>
              <Text mt={'0.3125rem'} color={'cyan.500'}>
                {post.createdAt.slice(0, 10)}
              </Text>
            </Box>
            <Divider mt={'1.875rem'} />
            <ReactMarkdown className={style.markdown}>{post.content}</ReactMarkdown>
          </Flex>
        </>
      )}
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
