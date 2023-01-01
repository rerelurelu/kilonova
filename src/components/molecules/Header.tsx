import { NextPage } from 'next';
import Link from 'next/link';

const entries = [
  { href: '/', content: 'blog' },
  { href: '/about', content: 'about' },
  { href: '/contact', content: 'contact' },
] as const;

const Header: NextPage = () => {
  return (
    <div className="navbar fixed z-50 flex h-20 flex-row-reverse bg-base-100/30 px-11 pt-4 backdrop-blur">
      <ul className="menu menu-horizontal p-0">
        {entries.map(({ href, content }) => {
          return (
            <li key={content}>
              <Link href={href} className="hover:bg-transparent">
                <span className="text-lg font-normal capitalize tracking-widest antialiased hover:opacity-70">
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
