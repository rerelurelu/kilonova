export type Post = {
  key: string;
  link: string;
  title: string;
  createdAt: string;
  tags: string[];
};

export type Posts = Post[];

export type ZennPost = {
  [key: string]: any;
};

export type BlogPost = {
  __typename: string;
  createdAt: string;
  title: string;
  slug: string;
  id: string;
};
