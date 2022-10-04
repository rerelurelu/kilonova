import { Box, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';

const entries = [
  { href: '/', content: 'blog' },
  { href: '/about', content: 'about' },
] as const;

const Header: NextPage = () => {
  return (
    <Box
      as={'header'}
      top={'0'}
      left={'0'}
      w={'full'}
      pos={'sticky'}
      zIndex={'100'}
      bg={'white.0'}
      backdropFilter={'auto'}
      backdropBlur={'12px'}
      borderBottom={'1px'}
      borderStyle={'solid'}
      borderBottomColor={'cyan.300'}
    >
      <Flex
        justify={'space-between'}
        alignItems={'center'}
        px={'1.5rem'}
        h={'64px'}
        color={'cyan.400'}
      >
        <Link href="/">
          <Image
            w={'40px'}
            h={'40px'}
            ml={{ base: '0rem', md: '1rem' }}
            _hover={{ cursor: 'pointer' }}
            src="logo.png"
            alt="header logo"
          />
        </Link>
        <Box as={'nav'}>
          <UnorderedList
            display={'flex'}
            fontWeight={'semibold'}
            fontSize={'lg'}
            listStyleType={'none'}
          >
            {entries.map(({ href, content }) => {
              return (
                <ListItem key={href}>
                  <Link href={href}>
                    <Text
                      textTransform={'uppercase'}
                      px={'0.75rem'}
                      _hover={{ textDecor: 'none', opacity: '0.7', cursor: 'pointer' }}
                    >
                      {content}
                    </Text>
                  </Link>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
