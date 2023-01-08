import { NextPage } from 'next';
import Head from 'next/head';

const SITE_NAME = 'zoniha';

type Props = {
  title: string;
  description: string;
};

const MyHead: NextPage<Props> = ({ title, description }) => {
  if (title === undefined) {
    title = SITE_NAME;
  } else {
    title = `${title} - ${SITE_NAME}`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Head>
  );
};

export default MyHead;
