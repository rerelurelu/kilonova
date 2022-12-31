import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { AuthFieldProps } from '../../types/props';
import { useRecoilState } from 'recoil';
import { haveAuthState } from '../../states/atoms/haveAuth';

const AuthField: NextPage<AuthFieldProps> = ({ setIsSecret }) => {
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
    <div className="pt-20 px-12 pb-60">
      <div className="grid place-items-center mt-80">
        {isError ? (
          <p className="text-red-500 font-semibold text-2xl">
            👻 something went wrong 👻
          </p>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          className={`input input-bordered w-full max-w-md rounded-full focus:border-violet-600 ${
            isError ? 'border-red-600 mt-4' : 'border-violet-300 mt-8'
          }`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn font-medium w-40 mt-20"
          onClick={() => handleSubmit(password)}
        >
          ENTER
        </button>
        <Link href={'/'} className="link mt-40">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default AuthField;
