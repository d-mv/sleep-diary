import { setupText } from '@mv-d/toolbelt';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import {
  DynamicDisplayTime,
  MaybeNull,
  SUCCESS,
  SUCCESS_LESS,
  Status,
  TEXT,
  UpdateTime,
  useTimes,
  useUpdates,
} from '../../../shared';

import './Asleep.css';

const TXT = setupText(TEXT)('asleep');

export default function Asleep() {
  const { wokeUp } = useUpdates();

  const { elapsedTimeAsleep } = useTimes();

  const [time, setTime] = useState<MaybeNull<Dayjs>>(null);

  function handleTimeChange(t: MaybeNull<Dayjs>) {
    if (!t) setTime(null);
    else setTime(t);
  }

  function handleUpdate() {
    if (time) {
      wokeUp(time);
      setTime(null);
    }
  }

  function handleOnCurrentTime() {
    wokeUp(dayjs());
    setTime(null);
  }

  return (
    <div className='Asleep__container'>
      <Status />
      <DynamicDisplayTime getTime={elapsedTimeAsleep} label={TXT('elapsedTime')} />
      <UpdateTime
        title={TXT('wokeUp')}
        updateTitle={TXT('enterManually')}
        updateTitleOpen={TXT('updateWakeUp')}
        value={time}
        onChange={handleTimeChange}
        onUpdate={handleUpdate}
        onCurrentTime={handleOnCurrentTime}
        onCancel={() => setTime(null)}
        roundButtonColors={[SUCCESS, SUCCESS_LESS]}
      />
    </div>
  );
}
