import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="grid place-items-center h-[70vh]">
      <div className="flex items-center">
        <p className="text-4xl text-white">404</p>
        <div className="divider divider-horizontal h-12 before:bg-indigo-200 before:w-px after:bg-indigo-200 after:w-px"></div>
        <p className="text-lg text-white">This page could not be found.</p>
      </div>
    </div>
  );
};

export default Custom404;
