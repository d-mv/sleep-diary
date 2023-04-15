import { useRecoilValue } from 'recoil';

import {
  currentSleepDurationState,
  timeToSleepState,
  intendedTimeToSleepState,
  wakeUpState,
  wentToBedState,
} from '../state';
import { extend } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { elapsedTime, remainingTime } from '../tools';

extend(relativeTime);

export function useTimes() {
  const wakeUpTime = useRecoilValue(wakeUpState);

  const sleepDuration = useRecoilValue(currentSleepDurationState);

  const intendedTimeToSleep = useRecoilValue(intendedTimeToSleepState);

  const timeToSleep = useRecoilValue(timeToSleepState);

  const wentToBed = useRecoilValue(wentToBedState);

  function elapsedTimeAsleep() {
    return elapsedTime(wentToBed.add(timeToSleep, 'ms'));
  }

  function elapsedTimeAwake() {
    return elapsedTime(wakeUpTime);
  }

  function remainingTimeToSleep() {
    return remainingTime(intendedTimeToSleep);
  }

  return { elapsedTimeAwake, remainingTimeToSleep, intendedTimeToSleep, elapsedTimeAsleep };
}
