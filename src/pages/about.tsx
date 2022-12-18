import { NextPage } from 'next';
import NextLink from 'next/link';

const links = [
  { href: 'https://github.com/zoniha', content: 'GitHub' },
  { href: 'https://www.resume.id/zoniha', content: 'Resume' },
  { href: 'https://zenn.dev/astrologian', content: 'Zenn' },
] as const;

const description = {
  para1: `現在はSESエンジニアとして働いています。`,
  para2: `将来的には、ユーザーからの意見も取り入れながらプロダクトを成長させていけるような環境で働き、
    エンジニア視点だけでなくユーザー視点からもプロダクト開発が行えるエンジニアになりたいと考えています。`,
} as const;

const About: NextPage = () => {
  return (
    <>
      <div className="grid place-items-center pt-40 px-6">
        <div className="avatar">
          <div className="h-48 w-48 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src="avatar.png" alt="zoniha's avatar image" />
          </div>
        </div>
        <span className="text-4xl mt-10">zoniha</span>
        <ul className="list-none flex gap-4 flex-wrap mt-6">
          {links.map(({ href, content }) => {
            return (
              <li key={content}>
                <NextLink
                  href={href}
                  target="_blank"
                  className="underline hover:opacity-70"
                >
                  {content}
                  <span className="ml-1 inline-block -rotate-45">→</span>
                </NextLink>
              </li>
            );
          })}
        </ul>
        <div className="grid place-items-center w-full mt-20 leading-6 max-w-4xl">
          <p>{description.para1}</p>
          <p className="mt-5">{description.para2}</p>
        </div>
      </div>
    </>
  );
};

export default About;
