import { NextPage } from 'next';
import Link from 'next/link';
import { PostCardProps } from '../../types/props';
import { convertDateDisplay } from '../../utils/convertDateDisplay';

const PostCard: NextPage<PostCardProps> = ({ title, href, createdAt }) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <Link href={href}>
      <div>
        <p>Post Card</p>
      </div>
    </Link>
  );
};

export default PostCard;
