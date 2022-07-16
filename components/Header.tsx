import { Box, Flex, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

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
      zIndex={40}
      bg={'gray.900'}
      backdropBlur={'8px'}
      boxShadow={'outline'}
      pos={'fixed'}
      borderBottom={'1px'}
      borderBottomColor={'cyan.200'}
    >
      <Flex justify={'space-between'} alignItems={'center'} px={6} h={16} color={'cyan.400'}>
        <NextLink href="/">
          <Link
            fontWeight={'bold'}
            fontSize={'3xl'}
            _hover={{ textDecor: 'none' }}
          >{`zoniha's blog`}</Link>
        </NextLink>
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
                  <NextLink href={href}>
                    <Link
                      textTransform={'uppercase'}
                      px={3}
                      _hover={{ textDecor: 'none', opacity: '0.7' }}
                    >
                      {content}
                    </Link>
                  </NextLink>
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
