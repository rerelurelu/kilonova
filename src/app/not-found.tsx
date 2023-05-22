'use client';

import { Metadata, NextPage } from 'next';

import { NOT_FOUND } from '@/const/seo';

const siteName = 'zoniha';
const description = NOT_FOUND.DESCRIPTION;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
};

const NotFound: NextPage = () => {
  return (
    <div className='grid h-[70vh] place-items-center px-12'>
      <div className='flex items-center'>
        <p className='text-4xl text-white'>404</p>
        <div className='divider divider-horizontal h-12 before:w-px before:bg-indigo-200 after:w-px after:bg-indigo-200'></div>
        <p className='text-lg text-white'>This page could not be found.</p>
      </div>
    </div>
  );
};

export default NotFound;
