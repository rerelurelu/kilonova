import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
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
      zIndex={'40'}
      bg={'gray.900'}
      backdropBlur={'8px'}
      boxShadow={'outline'}
      pos={'sticky'}
      borderBottom={'1px'}
      borderBottomColor={'cyan.200'}
    >
      <Flex
        justify={'space-between'}
        alignItems={'center'}
        px={'1.5rem'}
        h={'64px'}
        color={'cyan.400'}
      >
        <Link href="/">
          <Text
            fontWeight={'bold'}
            fontSize={'3xl'}
            _hover={{ textDecor: 'none' }}
          >{`zoniha's blog`}</Text>
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
                      _hover={{ textDecor: 'none', opacity: '0.7' }}
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
