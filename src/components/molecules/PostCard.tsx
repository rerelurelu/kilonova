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
    <article className="card h-48 overflow-hidden bg-gradient-to-br from-gPink to-gViolet">
      <div className="card-body justify-between p-card text-white">
        <header className="mb-auto">
          <h2 className="card-title break-words text-base">
            <Link href={href}>{title}</Link>
          </h2>
        </header>
        <div className="flex flex-col justify-end">
          <time dateTime={createdAt} className="text-sm">
            {dateDisplay}
          </time>
          <div className="card-actions justify-start">
            {tags.map((tag: string) => (
              <div key={tag} className="text-fuchsia-300">
                <span className="mr-px text-sm">#</span>
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
