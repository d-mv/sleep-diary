import { useRecoilValue } from 'recoil';

import { statusState, Statuses } from '../state';

export function useStatus() {
  const status = useRecoilValue(statusState);

  const isAwake = () => status === Statuses.AWAKE;

  const isAsleep = () => status === Statuses.ASLEEP;

  return { isAwake, isAsleep, status };
}
