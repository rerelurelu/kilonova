import { NextPage } from 'next';
import Head from 'next/head';
import { MyHeadProps } from '../../types/props';

const SITE_NAME = `zoniha's blog`;

const MyHead: NextPage<MyHeadProps> = ({ title }) => {
  if (title === undefined) {
    title = SITE_NAME;
  } else {
    title = `${title} - ${SITE_NAME}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MyHead;
