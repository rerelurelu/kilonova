import { NextPage } from 'next';
import Link from 'next/link';
import { convertDateDisplay } from 'utils/convertDateDisplay';

type Props = {
  title: string;
  href: string;
  createdAt: string;
  tags: string[];
};

const PostCard: NextPage<Props> = ({ title, href, createdAt, tags }) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <article className="card bg-blue-900 shadow-xl h-48 overflow-hidden">
      <div className="card-body p-card justify-between">
        <header className="mb-auto">
          <h2 className="card-title break-words text-base">
            <Link href={href}>{title}</Link>
          </h2>
        </header>
        <div className="justify-end flex flex-col">
          <time dateTime={createdAt} className="text-sm">
            {dateDisplay}
          </time>
          <div className="card-actions justify-start">
            {tags.map((tag: string) => (
              <div key={tag} className="text-fuchsia-400">
                <span className="text-sm mr-px">#</span>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
