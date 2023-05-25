'use client';

import { Toaster } from 'react-hot-toast';

const MyToaster = () => {
  return (
    <>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
};

export default MyToaster;
