import { atom } from 'recoil';

export const currentPageState = atom<string>({
  key: 'currentPage',
  default: '/',
});
