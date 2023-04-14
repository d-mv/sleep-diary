import { atom } from 'recoil';

export enum Statuses {
  AWAKE = 'awake',
  ASLEEP = 'asleep',
}

export const statusState = atom<Statuses>({
  key: 'statusState',
  default: Statuses.AWAKE,
});
