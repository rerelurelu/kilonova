import { Box, Skeleton, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const SkeletonCard: NextPage = () => {
  return (
    <Box
      bg={'gray.800'}
      w={{ base: '100%', md: '80%' }}
      maxW={'1000px'}
      h={'150px'}
      borderRadius={'1rem'}
      pos={'relative'}
    >
      <VStack spacing={'0.625rem'} alignItems={'normal'} padding={'1.25rem'}>
        <Skeleton startColor="cyan.100" endColor="cyan.300" h={'30px'} borderRadius={'0.625rem'} />
        <Skeleton
          startColor="cyan.100"
          endColor="cyan.300"
          h={'15px'}
          w={'20%'}
          maxW={'200px'}
          borderRadius={'0.3125rem'}
          pos={'absolute'}
          bottom={'0.625rem'}
          left={'1.25rem'}
          fontSize={'sm'}
          color={'cyan.700'}
        />
      </VStack>
    </Box>
  );
};

export default SkeletonCard;
