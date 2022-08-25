import { atom } from 'recoil';

export const haveAuthState = atom<boolean>({
  key: 'haveAuth',
  default: false,
});
