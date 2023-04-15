import { useRecoilValue, useSetRecoilState } from 'recoil';

import { statusState, Statuses } from '../state';

export function useStatus() {
  const status = useRecoilValue(statusState);

  const changeStatus = useSetRecoilState(statusState);

  const isAwake = () => status === Statuses.AWAKE;

  const isAsleep = () => status === Statuses.ASLEEP;

  return { isAwake, isAsleep, status, changeStatus };
}
