import { NextPage } from 'next';
import Link from 'next/link';

const entries = [
  { href: '/', content: 'blog' },
  { href: '/about', content: 'about' },
  { href: '/contact', content: 'contact' },
] as const;

const Header: NextPage = () => {
  return (
    <div>
      <p>HEADER</p>
    </div>
  );
};

export default Header;
