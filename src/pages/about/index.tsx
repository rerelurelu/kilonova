import { NextPage } from 'next';
import NextLink from 'next/link';

import RootLayout from '@/components/layout';
import { ABOUT } from '@/const/seo';

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
    <RootLayout title={ABOUT.TITLE} description={ABOUT.DESCRIPTION}>
      <div className='mt-24 grid place-items-center px-6 md:mt-36'>
        <div className='avatar'>
          <div className='h-48 w-48 rounded-full ring ring-secondary ring-offset-2 ring-offset-base-100'>
            <img src='avatar.png' alt="zoniha's avatar image" />
          </div>
        </div>
        <span className='mt-10 text-4xl'>zoniha</span>
        <ul className='mt-6 flex list-none flex-wrap gap-4'>
          {links.map(({ href, content }) => {
            return (
              <li key={content}>
                <NextLink href={href} target='_blank' className='underline hover:opacity-70'>
                  {content}
                  <span className='ml-1 inline-block -rotate-45'>→</span>
                </NextLink>
              </li>
            );
          })}
        </ul>
        <div className='mt-20 grid w-full max-w-4xl place-items-center leading-6'>
          <p>{description.para1}</p>
          <p className='mt-5'>{description.para2}</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default About;
