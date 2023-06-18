import { BlogPost } from '@/types/post';

export const getPost = async (slug: string): Promise<BlogPost> => {
  const response = await fetch(process.env.NEXT_PUBLIC_CONTENT_API!, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPost($slug: String!) {
          posts(where: { slug: $slug }) {
            createdAt
            title
            content
          }
        }
      `,
      variables: {
        slug: slug,
      },
    }),
  });

  const { data } = await response.json();

  return data.posts[0];
};
