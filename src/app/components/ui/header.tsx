import { NextPage } from 'next';
import Link from 'next/link';

import { ENTRIES } from '@/const/entries';
import { useCurrentPage } from '@/hooks/useCurrentPage';

const Header: NextPage = () => {
  const currentPage = useCurrentPage();

  return (
    <div className='navbar fixed inset-x-0 top-0 z-50 flex h-20 justify-center bg-base-100/30 px-0 pt-4 backdrop-blur md:justify-end md:px-12 md:pt-4'>
      <ul className='menu menu-horizontal p-0'>
        {ENTRIES.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link href={href} className='hover:bg-transparent focus:bg-transparent' id={content}>
                <span
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className={`after:nav-underline relative text-base font-semibold capitalize tracking-widest text-white antialiased md:text-lg ${
                    currentPage === content ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {content}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
