import { useCallback, useEffect, useState } from 'react';

import { DisplayTime } from '../DisplayTime';

interface Props {
  getTime: () => string;
  label: string;
}

export function DynamicDisplayTime({ getTime, label }: Props) {
  const [time, setTime] = useState<string>(getTime());

  const updateTime = useCallback(() => {
    setTime(getTime());
  }, [getTime, label]);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer ?? 0);
    };
  }, [updateTime]);

  return <DisplayTime time={time} label={label} />;
}
