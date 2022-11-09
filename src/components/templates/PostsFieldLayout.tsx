import { NextPage } from 'next';
import { ChildrenProps } from '../../types/props';

const PostsFieldLayout: NextPage<ChildrenProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PostsFieldLayout;
