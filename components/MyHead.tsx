import { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  title?: string;
};

const SITE_NAME = `zoniha's blog`;

const MyHead: NextPage<Props> = ({ title }) => {
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
