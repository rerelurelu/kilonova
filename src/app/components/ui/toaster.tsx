'use client';

import { Toaster } from 'react-hot-toast';

export const MyToaster = () => {
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
