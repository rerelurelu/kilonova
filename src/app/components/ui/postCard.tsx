import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import Link from 'next/link';

import { convertDateDisplay } from '@/features/common/convertDateDisplay';

type Props = {
  title: string;
  href: string;
  createdAt: string;
  tags: string[];
};

export const PostCard: NextPage<Props> = ({ title, href, createdAt, tags }) => {
  const dateDisplay = convertDateDisplay(createdAt.slice(0, 10));

  return (
    <article className='card h-48 overflow-hidden bg-gradient-to-br from-gBlue to-gPurple'>
      <div className='card-body justify-between p-card text-white'>
        <header className='mb-auto'>
          <h2 className='card-title break-words text-lg'>
            <Link
              href={href}
              className='hover:text-fuchsia-300'
              target={tags.includes('zenn') ? '_blank' : undefined}
            >
              {title}
              {tags.includes('zenn') && (
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{ marginLeft: '3px', opacity: 0.6 }}
                />
              )}
            </Link>
          </h2>
        </header>
        <div className='flex flex-col justify-end'>
          <time dateTime={createdAt} className='text-sm'>
            {dateDisplay}
          </time>
          <div className='card-actions justify-start'>
            {tags.map((tag: string) => (
              <div key={tag} className='text-fuchsia-300'>
                <span className='mr-px text-sm'>#</span>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
