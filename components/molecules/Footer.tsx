import { Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <Flex
      as="footer"
      w={'100%'}
      h={'60px'}
      mt={'4rem'}
      borderTop={'1px'}
      py={'1rem'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text fontSize={'sm'}>© 2022 zoniha</Text>
    </Flex>
  );
};

export default Footer;
