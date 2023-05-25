export interface Post {
  key: string;
  link: string;
  title: string;
  createdAt: string;
  tags: string[];
}

export interface ZennPost {
  [key: string]: any;
}

export interface BlogPost {
  __typename: string;
  createdAt: string;
  title: string;
  slug: string;
  id: string;
}
