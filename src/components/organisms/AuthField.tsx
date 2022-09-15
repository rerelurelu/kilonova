import { NextPage } from 'next';
import { Button, Grid, Input, Spacer, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
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
          <Spacer mb={'7.25rem'} />
        )}
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          variant="flushed"
          color={'cyan.600'}
          type={'password'}
          w={'50%'}
          maxW={'25rem'}
          textAlign={'center'}
          autoFocus={true}
          borderColor={'cyan.600'}
          _focus={{ borderColor: 'cyan.600', shadow: 'none' }}
        />
        <Button
          bg={'cyan.600'}
          mt={'7rem'}
          w={'20%'}
          maxW={'150px'}
          color={'yellow.300'}
          fontWeight={'bold'}
          _hover={{ opacity: '0.75' }}
          onClick={() => handleEnter(password)}
        >
          ENTER
        </Button>
      </Grid>
    </>
  );
};

export default AuthField;
