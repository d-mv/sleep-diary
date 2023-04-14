import { useState } from 'react';
import dayjs from 'dayjs';

import {
  MaybeNull,
  PrimaryButton,
  SecondaryButton,
  TimeInput,
  TimeUpdater,
  useUpdates,
  TEXT,
  Status,
  Spacer,
} from '../../../shared';
import { ifTrue, setupText } from '@mv-d/toolbelt';
import './Awake.css';

const TXT = setupText(TEXT)('awake');

export function Awake() {
  const { wentToBed } = useUpdates();

  const [time, setTime] = useState<string>('');

  const [timerUpdateIsOpen, setTimerUpdateIsOpen] = useState<boolean>(false);

  function toggleTimerUpdate() {
    if (!timerUpdateIsOpen) setTime(dayjs().toISOString());
    else setTime('');

    setTimerUpdateIsOpen(!timerUpdateIsOpen);
  }

  function handleWentToBed() {
    wentToBed();
  }

  function handleTimeChange(v: MaybeNull<string>) {
    setTime(v || '');
  }

  return (
    <div className='Awake__container'>
      <Status />
      <p>elapsed time of awake</p>
      <p>time to go to sleep</p>
      <p>time till sleep</p>
      <PrimaryButton title={TXT('wentToBed')} onClick={handleWentToBed} />
      <Spacer vertical two />
      <TimeUpdater
        isOpen={timerUpdateIsOpen}
        buttonTitle='Update sleep time'
        value={time}
        onChange={handleTimeChange}
        onUpdate={handleWentToBed}
        toggleIsOpen={toggleTimerUpdate}
      />
    </div>
  );
}
