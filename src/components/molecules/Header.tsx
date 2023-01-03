import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

type Entries = 'blog' | 'about' | 'contact';

const ENTRIES = [
  { href: '/', content: 'blog' },
  { href: '/about', content: 'about' },
  { href: '/contact', content: 'contact' },
] as const;

const Header: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<Entries>('blog');

  const handleClick = (e: any) => {
    setCurrentPage(e.currentTarget.id);
  };
  return (
    <div className="navbar fixed z-50 flex h-20 flex-row-reverse bg-base-100/30 px-11 pt-4 backdrop-blur">
      <ul className="menu menu-horizontal p-0">
        {ENTRIES.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link
                href={href}
                className="hover:bg-transparent"
                id={content}
                onClick={handleClick}
              >
                <span
                  className={`after:nav-underline relative text-lg font-semibold capitalize tracking-widest text-white antialiased ${
                    currentPage === content
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
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
