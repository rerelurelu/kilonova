import Parser from 'rss-parser';

import { GET_POSTS_QUERY } from '../api/graphql/queries/GetPostsQuery';

import { ZENN_FEED_URL } from '@/const/url';
import client from '@/features/api/graphql/config/ApolloClientConfig';
import { BlogPost, Post, ZennPost } from '@/types/post';

export const getPosts = async (): Promise<Post[]> => {
  const parser = new Parser();
  const feedZenn: ZennPost = await parser.parseURL(ZENN_FEED_URL);

  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  });

  const posts: Post[] = [];

  feedZenn.items.map((post: ZennPost) => {
    posts.push({
      key: post.link.slice(-14),
      link: post.link,
      title: post.title,
      createdAt: post.isoDate.slice(0, 10),
      tags: ['zenn'],
    });
  });

  data.posts.map((post: BlogPost) => {
    posts.push({
      key: post.id,
      link: `/blog/${post.slug}`,
      title: post.title,
      createdAt: post.createdAt.slice(0, 10),
      tags: ['myself'],
    });
  });

  posts.sort((x, y) => (x.createdAt > y.createdAt ? -1 : 1));

  return posts;
};
