import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { NextPage } from 'next';

const Footer: NextPage = () => {
  const footerColor = useColorModeValue('cyan.400', 'cyan.500');
  return (
    <Flex
      as="footer"
      w={'100%'}
      h={'60px'}
      mt={'4rem'}
      borderTop={'1px'}
      borderColor={footerColor}
      py={'1rem'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text fontSize={'sm'} textColor={footerColor}>
        © 2022 zoniha
      </Text>
    </Flex>
  );
};

export default Footer;
