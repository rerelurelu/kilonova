import {
  Box,
  Flex,
  IconButton,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';
import Link from 'next/link';

const entries = [
  { href: '/', content: 'blog' },
  { href: '/about', content: 'about' },
] as const;

const Header: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white.0', 'black.0');
  const navColor = useColorModeValue('cyan.400', 'cyan.500');

  return (
    <Box
      as={'header'}
      top={'0'}
      left={'0'}
      w={'full'}
      pos={'sticky'}
      zIndex={'100'}
      bg={bg}
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
        color={navColor}
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
            alignItems={'center'}
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
            <ListItem>
              <IconButton
                aria-label={colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                fontSize={'xl'}
                bgColor={'transparent'}
                _hover={{ bgColor: 'transparent' }}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              />
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
