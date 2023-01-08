import { NextPage } from 'next';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import PostCard from '@/components/ui/postCard';
import { currentPageState } from '@/states/atoms/currentPage';
import { Post, Posts } from '@/types/post';

type Props = {
  posts: Posts;
};

const BlogField: NextPage<Props> = ({ posts }) => {
  const router: NextRouter = useRouter();
  const isHome: boolean = router.asPath === '/';
  const setCurrentPage = useSetRecoilState<string>(currentPageState);

  const handleClick = (): void => {
    setCurrentPage('blog');
  };

  return (
    <section className='base:mt-24 mx-auto mt-16 grid w-full justify-items-center md:mt-36'>
      {isHome && <h2 className='mb-6 text-left text-xl md:mb-12 md:text-3xl'>Recent Posts</h2>}
      <div className='mt-8 grid w-full max-w-screen-lg gap-8 sm:grid-cols-1 md:mt-12 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post: Post) => {
          return (
            <PostCard
              key={post.key}
              title={post.title}
              href={post.link}
              createdAt={post.createdAt}
              tags={post.tags}
            />
          );
        })}
      </div>
      {isHome && (
        <Link
          href={'/blog'}
          className='mt-12 inline-block text-sm underline md:mt-16'
          onClick={handleClick}
        >
          All Posts →
        </Link>
      )}
    </section>
  );
};

export default BlogField;
