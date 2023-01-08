import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useRecoilState } from 'recoil';

import RootLayout from '@/components/layout';
import { AUTH } from '@/const/seo';
import { haveAuthState } from '@/states/atoms/haveAuth';

type Props = {
  setIsSecret: Dispatch<SetStateAction<boolean>>;
};

const AuthField: NextPage<Props> = ({ setIsSecret }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [_, setHaveAuth] = useRecoilState(haveAuthState);

  const handleSubmit = (password: string) => {
    if (password === process.env.NEXT_PUBLIC_POST_PASSWORD) {
      setIsSecret(false);
      setIsError(false);
      setHaveAuth(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <RootLayout title={AUTH.TITLE} description={AUTH.DESCRIPTION}>
      <div className='mt-40 grid place-items-center'>
        {isError ? (
          <p className='text-2xl font-semibold text-red-500'>👻 something went wrong 👻</p>
        ) : null}
        <input
          type='password'
          placeholder='Password'
          className={`input-bordered input w-full max-w-md rounded-full focus:border-violet-600 ${
            isError ? 'mt-4 border-red-600' : 'mt-8 border-violet-300'
          }`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className='btn mt-20 w-40 font-medium'
          onClick={() => handleSubmit(password)}
        >
          ENTER
        </button>
        <Link href={'/'} className='link mt-40'>
          Back Home
        </Link>
      </div>
    </RootLayout>
  );
};

export default AuthField;
