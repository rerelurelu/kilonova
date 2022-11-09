import { NextPage } from 'next';
import NextLink from 'next/link';

const links = [
  { href: 'https://zenn.dev/astrologian', content: 'Zenn' },
  { href: 'https://github.com/zoniha', content: 'GitHub' },
  { href: 'https://www.resume.id/zoniha', content: 'Resume' },
] as const;

const description = {
  para1: `現在はSESエンジニアとして働いています。`,
  para2: `将来的には、ユーザーからの意見も取り入れながらプロダクトを成長させていけるような環境で働き、
    エンジニア視点だけでなくユーザー視点からもプロダクト開発が行えるエンジニアになりたいと考えています。`,
} as const;

const About: NextPage = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

export default About;
