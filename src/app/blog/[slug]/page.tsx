import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { BLOG } from '@/const/seo';
import client from '@/features/api/graphql/config/ApolloClientConfig';
import { GET_POST_QUERY } from '@/features/api/graphql/queries/GetPostQuery';
import { GET_POSTS_QUERY } from '@/features/api/graphql/queries/GetPostsQuery';
import { convertDateDisplay } from '@/features/common/convertDateDisplay';
import { BlogPost } from '@/types/post';

const description = BLOG.DESCRIPTION;

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = await getPost(slug);
  let siteName = 'zoniha';

  if (post) {
    siteName = post.title + ' - zoniha';
  } else {
  }

  return {
    title: siteName,
    description: description,
    openGraph: {
      title: siteName,
      siteName,
      locale: 'ja_JP',
      type: 'website',
    },
  };
};

const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const dateDisplay = convertDateDisplay(post.createdAt.slice(0, 10));

  return (
    <>
      <article className='mx-auto mt-24 flex max-w-3xl flex-col items-center justify-center md:mt-32'>
        <header className='grid justify-items-center gap-12'>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <div className='grid justify-items-center gap-1 antialiased'>
            <p className='text-sm font-bold opacity-60'>Published</p>
            <time dateTime={post.createdAt}>{dateDisplay}</time>
          </div>
        </header>
        <span className='divider mb-0 mt-20'></span>
        <div className='mt-20 w-full text-lg tracking-wide'>
          <ReactMarkdown className='markdown'>{post.content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default Blog;

export const generateStaticParams = async () => {
  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  });

  const paths = data.posts.map((post: BlogPost) => {
    return {
      slug: post.slug,
    };
  });

  return [...paths];
};

const getPost = async (slug: string) => {
  const { data } = await client.query({
    query: GET_POST_QUERY,
    variables: {
      slug: slug,
    },
  });

  return data.posts[0];
};
