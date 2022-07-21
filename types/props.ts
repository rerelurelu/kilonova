import { ReactElement } from 'react';

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

export type ZennPostsProps = {
  zennPosts: Array<Feed>;
};

export type MyHeadProps = {
  title?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
};

export type PostCardProps = {
  title: string;
  href: string;
  createdAt: string;
};

export type ChildrenProps = {
  children: ReactElement;
};
