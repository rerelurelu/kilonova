import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ABOUT } from '@/const/seo';

const iconSize = 24;

const sns = {
  github: { href: 'https://github.com/rerelurelu' },
  zenn: { href: 'https://zenn.dev/astrologian' },
} as const;

const intro = {
  para1: `フロントエンドエンジニア（仮）`,
  para2: ``,
} as const;

export const metadata: Metadata = {
  title: ABOUT.TITLE,
  description: ABOUT.DESCRIPTION,
  openGraph: {
    title: ABOUT.TITLE,
    description: ABOUT.DESCRIPTION,
  },
};

export default function About() {
  return (
    <div className='mt-24 grid place-items-center px-6 md:mt-36'>
      <div className='avatar'>
        <div className='h-48 w-48 rounded-full ring ring-secondary ring-offset-2 ring-offset-base-100'>
          <Image src='avatar.png' width={512} height={512} alt="relu's avatar image" />
        </div>
      </div>
      <span className='mt-10 text-4xl'>relu</span>
      <ul className='mt-6 flex list-none flex-wrap gap-4'>
        <li>
          <Link href={sns.github.href} target='_blank' className='underline hover:opacity-70'>
            <Image
              className='fill-blue-500'
              src='icons/github-logo.svg'
              width={iconSize}
              height={iconSize}
              alt='GitHub logo'
            />
          </Link>
        </li>
        <li>
          <Link href={sns.zenn.href} target='_blank' className='underline hover:opacity-70'>
            <Image src='icons/zenn-logo.svg' width={iconSize} height={iconSize} alt='Zenn logo' />
          </Link>
        </li>
      </ul>
      <div className='mt-20 grid w-full max-w-4xl place-items-center leading-6'>
        <p>{intro.para1}</p>
        <p className='mt-5'>{intro.para2}</p>
      </div>
    </div>
  );
}
