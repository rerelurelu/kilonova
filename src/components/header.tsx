import { NextPage } from 'next';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { currentPageState } from '@/states/atoms/currentPage';

const ENTRIES = [
  { href: '/', content: 'home' },
  { href: '/blog', content: 'blog' },
  { href: '/about', content: 'about' },
  { href: '/contact', content: 'contact' },
] as const;

const Header: NextPage = () => {
  const router: NextRouter = useRouter();
  const path: string = router.asPath;
  const currentPath = router.asPath === '/' ? 'home' : path.slice(1);

  const [currentPage, setCurrentPage] = useRecoilState<string>(currentPageState);

  useEffect(() => {
    setCurrentPage(currentPath);
  }, [setCurrentPage, currentPath]);

  return (
    <div className='navbar fixed z-50 flex h-20 justify-center bg-base-100/30 px-0 pt-4 backdrop-blur md:justify-end md:px-12 md:pt-4'>
      <ul className='menu menu-horizontal p-0'>
        {ENTRIES.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link href={href} className='hover:bg-transparent' id={content}>
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
