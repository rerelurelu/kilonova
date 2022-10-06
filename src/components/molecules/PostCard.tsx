import { Box, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { PostCardProps } from '../../types/props';
import { convertDateDisplay } from '../../utils/convertDateDisplay';

const PostCard: NextPage<PostCardProps> = ({ title, href, createdAt }) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));
  return (
    <NextLink href={href}>
      <Box
        bg={'white.100'}
        w={{ base: '100%', md: '80%' }}
        maxW={'15.625rem'}
        h={'13rem'}
        border={'0.125rem'}
        borderStyle={'solid'}
        borderColor={'skyBlue.50'}
        borderRadius={'0.9375rem'}
        pos={'relative'}
        cursor={'pointer'}
        boxShadow={'0 0 7px #70C6F566'}
        transition={'transform .4s'}
        transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
        _hover={{ transform: 'scale(1.02)' }}
      >
        <VStack spacing={'0.625rem'} alignItems={'normal'} padding={'1.25rem'}>
          <Box maxH={'80%'}>
            <Text fontSize={'lg'} fontWeight={'bold'} noOfLines={3} color={'fc.title'}>
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
            {dateDisplay}
          </Text>
        </VStack>
      </Box>
    </NextLink>
  );
};

export default PostCard;
