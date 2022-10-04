import { NextPage } from 'next';
import { Button, Grid, Input, Spacer, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import NextLink from 'next/link';
import MyHead from '../molecules/MyHead';
import { AuthFieldProps } from '../../types/props';
import { useRecoilState } from 'recoil';
import { haveAuthState } from '../../states/atoms/haveAuth';

const AuthField: NextPage<AuthFieldProps> = ({ setIsSecret }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [_, setHaveAuth] = useRecoilState(haveAuthState);

  const handleEnter = (password: string) => {
    if (password === process.env.NEXT_PUBLIC_POST_PASSWORD) {
      setIsSecret(false);
      setIsError(false);
      setHaveAuth(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <MyHead title={'SECURITY ROOM'} />
      <Grid mt={'13rem'} justifyItems={'center'} alignItems={'center'}>
        {isError ? (
          <Text color={'red.500'} mb={'5rem'} fontSize={'2xl'} fontWeight={'bold'}>
            👻 something went wrong 👻
          </Text>
        ) : (
          <Spacer mb={'5.25rem'} />
        )}
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          variant="flushed"
          fontSize={'1.5rem'}
          color={'cyan.500'}
          type={'password'}
          w={'50%'}
          maxW={'25rem'}
          textAlign={'center'}
          autoFocus={true}
          borderColor={'cyan.400'}
          _focus={{ borderColor: 'cyan.400', shadow: 'none' }}
        />
        <Button
          bg={'cyan.400'}
          mt={{ base: '3rem', sm: '7rem' }}
          w={'20%'}
          maxW={'150px'}
          color={'yellow.200'}
          fontWeight={'bold'}
          _hover={{ opacity: '0.75' }}
          onClick={() => handleEnter(password)}
        >
          ENTER
        </Button>
        <Spacer mb={'3rem'} />
        <NextLink href={'/'} color={'yellow.200'}>
          <Text
            as={'span'}
            color={'cyan.300'}
            decoration={'underline'}
            _hover={{ cursor: 'pointer', color: 'cyan.500' }}
          >
            Back Home
          </Text>
        </NextLink>
      </Grid>
    </>
  );
};

export default AuthField;
