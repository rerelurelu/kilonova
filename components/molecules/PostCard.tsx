import { Box, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { PostCardProps } from '../../types/props';

const PostCard: NextPage<PostCardProps> = ({ title, href, createdAt }) => {
  return (
    <NextLink href={href}>
      <Box
        bg={'gray.800'}
        w={{ base: '100%', md: '80%' }}
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
          <Box maxH={'80%'}>
            <Text fontSize={'lg'} fontWeight={'semibold'} noOfLines={3}>
              {title}
            </Text>
          </Box>
          <Text
            pos={'absolute'}
            bottom={'0.3125rem'}
            left={'1.25rem'}
            fontSize={'sm'}
            color={'cyan.700'}
          >
            {createdAt.slice(0, 10)}
          </Text>
        </VStack>
      </Box>
    </NextLink>
  );
};

export default PostCard;
