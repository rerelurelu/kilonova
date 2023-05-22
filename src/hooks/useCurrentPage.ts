'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ENTRIES } from '@/const/entries';
import { currentPageState } from '@/states/atoms/currentPage';

export const useCurrentPage = () => {
  const pathname = usePathname();
  const path: string | null = pathname;
  const currentPath = getCurrentPath(path!);

  const [currentPage, setCurrentPage] = useRecoilState<string>(currentPageState);

  useEffect(() => {
    setCurrentPage(currentPath);
  }, [setCurrentPage, currentPath]);

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
