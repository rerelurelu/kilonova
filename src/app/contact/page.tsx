import { Metadata, NextPage } from 'next';

import Form from '@/components/ui/form';
import MyToaster from '@/components/ui/toaster';
import { CONTACT } from '@/const/seo';

const siteName = 'zoniha';
const description = CONTACT.DESCRIPTION;

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

const Contact: NextPage = () => {
  return (
    <>
      <MyToaster />
      <header className='m-header md:m-header-md'>
        <h1 className='text-center text-4xl font-normal tracking-widest text-white'>
          {CONTACT.TITLE}
        </h1>
      </header>
      <Form />
    </>
  );
};

export default Contact;
