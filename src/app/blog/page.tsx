import { Metadata } from 'next';

import BlogField from '@/components/model/blogField';
import { BLOG } from '@/const/seo';
import { getPosts } from '@/features/common/getPosts';
import { Post } from '@/types/post';

const siteName = 'zoniha';
const description = BLOG.DESCRIPTION;

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

  return (
    <>
      <header className='m-header md:m-header-md'>
        <h1 className='text-center text-4xl font-normal tracking-widest text-white'>
          {BLOG.TITLE}
        </h1>
      </header>
      <BlogField posts={posts} />
    </>
  );
};

export default Home;
