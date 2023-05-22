import { Metadata, NextPage } from 'next';
import Link from 'next/link';

import { ABOUT } from '@/const/seo';

const links = [
  { href: 'https://github.com/zoniha', content: 'GitHub' },
  { href: 'https://zenn.dev/astrologian', content: 'Zenn' },
] as const;

const intro = {
  para1: `現在転職活動中です 🦈`,
  para2: `以前はSESのエンジニアとして業務支援アプリや会員制サイトの開発をしていました。フロントエンドからバックエンドまで経験がありますが、どちらかといえばフロントエンドが得意です。大学時代は画像認識の分野を学んでいたのでそこらへんの知識も少しあります。`,
} as const;

const siteName = 'zoniha';
const description = ABOUT.DESCRIPTION;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
};

const About: NextPage = () => {
  return (
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
              <Link href={href} target='_blank' className='underline hover:opacity-70'>
                {content}
                <span className='ml-1 inline-block -rotate-45'>→</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='mt-20 grid w-full max-w-4xl place-items-center leading-6'>
        <p>{intro.para1}</p>
        <p className='mt-5'>{intro.para2}</p>
      </div>
    </div>
  );
};

export default About;
