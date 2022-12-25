import { NextPage } from 'next';
import Link from 'next/link';

const entries = [
  { href: '/', content: 'blog' },
  { href: '/about', content: 'about' },
  { href: '/contact', content: 'contact' },
] as const;

const Header: NextPage = () => {
  return (
    <div className="navbar h-20 px-11 pt-4 font-semibold bg-base-100/30 backdrop-blur flex flex-row-reverse fixed z-50">
      <ul className="menu menu-horizontal p-0">
        {entries.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link href={href} className="hover:bg-transparent">
                <span className="text-lg capitalize antialiased tracking-widest hover:opacity-70">
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
