import { Grid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ChildrenProps } from '../../types/props';

const PostsFieldLayout: NextPage<ChildrenProps> = ({ children }) => {
  return (
    <Grid
      templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }}
      mt={{ base: '3.125rem', md: '6.25rem' }}
      justifyItems={'center'}
      alignItems={'center'}
      rowGap={'5rem'}
    >
      {children}
    </Grid>
  );
};

export default PostsFieldLayout;
