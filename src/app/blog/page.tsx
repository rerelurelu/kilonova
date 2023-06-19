import { Metadata } from 'next';

import { BlogField } from '@/components/model/blogField';
import { BLOG } from '@/const/seo';
import { getPosts } from '@/features/api/getPosts';
import { Post } from '@/types/post';

const title = 'Blog';

export const metadata: Metadata = {
  title: title,
  description: BLOG.DESCRIPTION,
  openGraph: {
    title: title,
    description: BLOG.DESCRIPTION,
  },
};

export default async function Home() {
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
}
