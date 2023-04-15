import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { setupText } from '@mv-d/toolbelt';

import {
  MaybeNull,
  useUpdates,
  TEXT,
  Status,
  useTimes,
  DisplayTime,
  DynamicDisplayTime,
  formatAtTime,
  UpdateTime,
  PRIMARY,
  PRIMARY_LESS,
} from '../../../shared';

import './Awake.css';

const TXT = setupText(TEXT)('awake');

export default function Awake() {
  const { wentToBed } = useUpdates();

  const { elapsedTimeAwake, remainingTimeToSleep, intendedTimeToSleep } = useTimes();

  const [time, setTime] = useState<MaybeNull<Dayjs>>(null);

  function handleTimeChange(t: MaybeNull<Dayjs>) {
    if (!t) setTime(null);
    else setTime(t);
  }

  function handleUpdate() {
    if (time) {
      wentToBed(time);
      setTime(null);
    }
  }

  function handleOnCurrentTime() {
    wentToBed(dayjs());
    setTime(null);
  }

  return (
    <div className='Awake__container'>
      <Status />
      <DynamicDisplayTime getTime={elapsedTimeAwake} label='Elapsed time' />
      <DynamicDisplayTime getTime={remainingTimeToSleep} label='Remaining time till sleep' />
      <DisplayTime time={formatAtTime(intendedTimeToSleep)} label='Intended time to sleep' />
      <UpdateTime
        title={TXT('wentToBed')}
        updateTitle={TXT('enterManually')}
        updateTitleOpen={TXT('updateSleep')}
        value={time}
        onChange={handleTimeChange}
        onUpdate={handleUpdate}
        onCurrentTime={handleOnCurrentTime}
        onCancel={() => setTime(null)}
        roundButtonColors={[PRIMARY, PRIMARY_LESS]}
      />
    </div>
  );
}
