import dayjs, { Dayjs } from 'dayjs';
import { atom } from 'recoil';

import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const wakeUpState = atom<Dayjs>({
  key: 'wakeUpState',
  default: dayjs('10:05 AM', 'h:mm A'),
});

export const currentSleepDurationState = atom<number>({
  key: 'currentSleepDurationState',
  default: 80 * 60 * 1000, // 80 minutes
});

export const intendedTimeToSleepState = atom<Dayjs>({
  key: 'intendedTimeToSleepState',
  default: dayjs('10:05 PM', 'h:mm A'),
});

export const timeToSleepState = atom<number>({
  key: 'timeToSleepState',
  // TODO: remove
  default: 14 * 60 * 1000, // 10 minutes
});

export const wentToBedState = atom<Dayjs>({
  key: 'wentToBedState',
  default: dayjs('7:44 PM', 'h:mm A'),
});
