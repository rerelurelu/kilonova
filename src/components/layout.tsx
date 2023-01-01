import { NextPage } from 'next';
import { ReactNode } from 'react';
import MyHead from './atoms/MyHead';

type Props = {
  title: string;
  children: ReactNode;
};

export const RootLayout: NextPage<Props> = ({ title, children }) => {
  return (
    <>
      <MyHead title={title} />
      <div className="px-12 pt-20 pb-60">{children}</div>
    </>
  );
};
