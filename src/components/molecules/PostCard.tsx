import { Box, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { PostCardProps } from '../../types/props';
import { convertDateDisplay } from '../../utils/convertDateDisplay';
// import style from '../../style/postCard.module.scss';

const PostCard: NextPage<PostCardProps> = ({ title, href, createdAt }) => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('white.100', 'gray.700');
  const fcTitle = useColorModeValue('fc.title', 'fcDark.title');
  const fcSub = useColorModeValue('fc.sub', 'fcDark.sub');
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <Link href={href}>
      <Box
        bg={bg}
        h={'13rem'}
        border={'0.125rem'}
        borderStyle={'solid'}
        borderColor={'skyBlue.50'}
        borderRadius={'0.9375rem'}
        pos={'relative'}
        cursor={'pointer'}
        boxShadow={colorMode === 'light' ? '0 0 7px #70c6f566' : '0 0 7px #18ffffcc'}
        transition={'transform .4s'}
        transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
        _hover={{ transform: 'scale(1.02)' }}
      >
        <VStack spacing={'0.625rem'} alignItems={'normal'} padding={'1.25rem'}>
          <Box maxH={'80%'}>
            <Text fontSize={'lg'} fontWeight={'bold'} noOfLines={3} color={fcTitle}>
              {title}
            </Text>
          </Box>
          <Text
            pos={'absolute'}
            bottom={'0.3125rem'}
            left={'1.25rem'}
            fontSize={'sm'}
            color={fcSub}
          >
            {dateDisplay}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default PostCard;
