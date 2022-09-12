import { Grid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ChildrenProps } from '../../types/props';

const PostsFieldLayout: NextPage<ChildrenProps> = ({ children }) => {
  return (
    <Grid
      mt={{ base: '3.125rem', md: '6.25rem' }}
      justifyItems={'center'}
      alignItems={'center'}
      gap={'40px'}
    >
      {children}
    </Grid>
  );
};

export default PostsFieldLayout;
