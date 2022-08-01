import { ReactElement, Dispatch, SetStateAction } from 'react';

type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
};

export type PostsProps = {
  zennPosts: Array<Feed>;
  blogPosts: Array<BlogPost>;
};

export type ZennPostsProps = {
  zennPosts: Array<Feed>;
};

export type BlogFieldProps = {
  blogPosts: Array<BlogPost>;
};

export type MyHeadProps = {
  title?: string;
};

export type PostCardProps = {
  title: string;
  href: string;
  createdAt: string;
};

export type ChildrenProps = {
  children: ReactElement;
};

export type AuthFieldProps = {
  setIsSecret: Dispatch<SetStateAction<boolean>>;
};
