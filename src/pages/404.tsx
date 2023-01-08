import { NextPage } from 'next';

import RootLayout from '@/components/layout';
import { NOT_FOUND } from '@/const/seo';

const Custom404: NextPage = () => {
  return (
    <RootLayout title={NOT_FOUND.TITLE} description={NOT_FOUND.DESCRIPTION}>
      <div className='grid h-[70vh] place-items-center px-12'>
        <div className='flex items-center'>
          <p className='text-4xl text-white'>404</p>
          <div className='divider divider-horizontal h-12 before:w-px before:bg-indigo-200 after:w-px after:bg-indigo-200'></div>
          <p className='text-lg text-white'>This page could not be found.</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default Custom404;
