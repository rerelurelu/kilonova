import { Metadata } from 'next';

import { BlogField } from '@/components/model/blogField';
import { HOME } from '@/const/seo';
import { getPosts } from '@/features/api/getPosts';
import { Post } from '@/types/post';

const intro = {
  para1: `Welcome to my site!`,
  para2: `I'm zoniha.`,
  para3: `I live in Tokyo, Japan.`,
} as const;

const siteName = 'zoniha';
const description = HOME.DESCRIPTION;

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

const Home = async () => {
  const posts: Post[] = await getPosts();
  const recentPosts: Post[] = posts.slice(0, 3);

  return (
    <>
      <header className='md:m-header-md md:grid md:justify-items-center'>
        <div className='mockup-code max-w-4xl bg-violet-300 pb-12 tracking-tight md:w-[80%]'>
          <pre data-prefix='1'>
            <code>{intro.para1}</code>
          </pre>
          <pre data-prefix='2'>
            <code>{intro.para2}</code>
          </pre>
          <pre data-prefix='3'>
            <code>{intro.para3}</code>
          </pre>
        </div>
      </header>
      <div className='mt-28 sm:mt-32 md:mt-44'>
        <BlogField posts={recentPosts} />
      </div>
    </>
  );
};

export default Home;
