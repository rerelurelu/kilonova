import { NextPage } from 'next';
import Link from 'next/link';
import { PostCardProps } from '../../types/props';
import { convertDateDisplay } from '../../utils/convertDateDisplay';

const PostCard: NextPage<PostCardProps> = ({ title, href, createdAt }) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <article className="card w-96 bg-blue-900 shadow-xl min-h-[12rem]">
      <div className="card-body pr-16">
        <header className="mb-auto">
          <h2 className="card-title break-keep">
            <Link href={href}>{title}</Link>
          </h2>
        </header>
        <time dateTime={createdAt}>{dateDisplay}</time>
      </div>
    </article>
  );
};

export default PostCard;
