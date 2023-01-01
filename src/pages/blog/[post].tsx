import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import AuthField from '../../components/organisms/AuthField';
import { MarkdownTemplate } from '../../components/templates/MarkdownTemplate';
import client from '../../graphql/config/ApolloClientConfig';
import { GET_POST_QUERY } from '../../graphql/queries/GetPostQuery';
import { GET_POSTS_QUERY } from '../../graphql/queries/GetPostsQuery';
import { haveAuthState } from '../../states/atoms/haveAuth';
import { convertDateDisplay } from '../../utils/convertDateDisplay';
import { BlogPost } from '../../types/post';

const Blog: NextPage<any> = ({ post }) => {
  const [isSecret, setIsSecret] = useState<boolean>(post.isSecret);
  const dateDisplay = convertDateDisplay(post.createdAt.slice(0, 10));
  const haveAuth = useRecoilValue(haveAuthState);

  if (haveAuth && isSecret) {
    setIsSecret(false);
  }

  return (
    <>
      {isSecret ? (
        <AuthField setIsSecret={setIsSecret} />
      ) : (
        <div className="pt-20 px-12 pb-60">
          <article className="flex justify-center items-center flex-col mt-40 max-w-3xl mx-auto">
            <header className="grid justify-items-center gap-12">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <time dateTime={post.createdAt}>{dateDisplay}</time>
            </header>
            <span className="divider mt-20 mb-0"></span>
            <div className="w-full mt-20 text-lg tracking-wide">
              <MarkdownTemplate content={post.content} />
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  });
  const paths = data.posts.map((post: BlogPost) => `/blog/${post.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data } = await client.query({
    query: GET_POST_QUERY,
    variables: {
      slug: params.post,
    },
  });

  return {
    props: {
      post: data.posts[0],
    },
  };
};
