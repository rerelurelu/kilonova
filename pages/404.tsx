import { Center, Divider, Grid, Heading, HStack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <Grid h={'70vh'} justifyItems={'center'} alignItems={'center'}>
      <HStack>
        <Heading>404</Heading>
        <Center height="50px" px={'1rem'}>
          <Divider orientation="vertical" borderColor={'cyan.200'} />
        </Center>
        <Text fontSize={'lg'}>This page could not be found.</Text>
      </HStack>
    </Grid>
  );
};

export default Custom404;
