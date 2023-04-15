import { Dayjs } from 'dayjs';
import { Statuses } from '../state';
import { useStatus } from './useStatus.hook';

export function useUpdates() {
  const { changeStatus } = useStatus();

  function wentToBed(time: Dayjs) {
    // eslint-disable-next-line no-console
    console.log('wentToBed', time);

    // change status to sleep;
    changeStatus(Statuses.ASLEEP);
    // store timestamp of when went to bed;
  }

  function wokeUp(time: Dayjs) {
    // eslint-disable-next-line no-console
    console.log('wokeUp', time);

    // change status to sleep;
    changeStatus(Statuses.AWAKE);
    // store timestamp of when went to bed;
  }

  return { wentToBed, wokeUp };
}
