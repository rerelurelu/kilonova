import { NextPage } from 'next';
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
    </>
  );
};

export default AuthField;
