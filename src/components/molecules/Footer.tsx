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
      borderColor={'cyan.900'}
      py={'1rem'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text fontSize={'sm'} textColor={'cyan.900'}>
        © 2022 zoniha
      </Text>
    </Flex>
  );
};

export default Footer;
