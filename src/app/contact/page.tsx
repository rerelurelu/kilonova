import { Metadata, NextPage } from 'next';

import Form from '@/components/ui/form';
import MyToaster from '@/components/ui/toaster';
import { CONTACT } from '@/const/seo';

export const metadata: Metadata = {
  title: CONTACT.TITLE,
  description: CONTACT.DESCRIPTION,
  openGraph: {
    title: CONTACT.TITLE,
    description: CONTACT.DESCRIPTION,
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
