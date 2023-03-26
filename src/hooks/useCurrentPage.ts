import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ENTRIES } from '@/const/entries';
import { currentPageState } from '@/states/atoms/currentPage';

export const useCurrentPage = () => {
  const router: NextRouter = useRouter();
  const path: string = router.asPath;
  const currentPath = getCurrentPath(path);

  const [currentPage, setCurrentPage] = useRecoilState<string>(currentPageState);

  useEffect(() => {
    setCurrentPage(currentPath);
  }, [setCurrentPage, currentPath]);

  console.log(currentPage);

  return currentPage;
};

const getCurrentPath = (path: string): string => {
  const isContentNotIncluded = ENTRIES.every((entry) => entry.content !== path.slice(1));

  if (path === '/') {
    return 'home';
  } else if (isContentNotIncluded) {
    return 'blog';
  } else {
    return path.slice(1);
  }
};
