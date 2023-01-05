import { NextPage } from 'next';
import { ReactNode } from 'react';
import MyHead from './atoms/MyHead';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export const RootLayout: NextPage<Props> = ({ title, description, children }) => {
  return (
    <>
      <MyHead title={title} description={description} />
      <div className="px-12 pt-20 pb-60">{children}</div>
    </>
  );
};
