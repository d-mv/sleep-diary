import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { PrimaryButton, RoundButton } from '../Buttons';
import { Spacer } from '../Spacer';
import { TimeUpdater } from '../TimeUpdater';
import { MaybeNull } from '../../types';
import { SUCCESS, SUCCESS_LESS } from '../../theme';

interface Props {
  title: string;
  updateTitle: string;
  updateTitleOpen: string;
  value: MaybeNull<Dayjs>;
  onChange: (v: MaybeNull<Dayjs>) => void;
  onUpdate: () => void;
  onCurrentTime: () => void;
  onCancel: () => void;
  roundButtonColors: [string, string];
}

export function UpdateTime({
  title,
  updateTitle,
  updateTitleOpen,
  value,
  onChange,
  onUpdate,
  onCancel,
  onCurrentTime,
  roundButtonColors,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleTimerUpdate() {
    if (!isOpen) onChange(dayjs());
    else onCancel();

    setIsOpen(!isOpen);
  }

  return (
    <>
      <RoundButton
        title={title}
        onClick={onCurrentTime}
        innerStyle={{ backgroundColor: roundButtonColors[0] }}
        outerStyle={{ backgroundColor: roundButtonColors[1] }}
      />
      <Spacer vertical two />
      <TimeUpdater
        isOpen={isOpen}
        buttonTitle={isOpen ? updateTitleOpen : updateTitle}
        value={value ?? dayjs()}
        onChange={onChange}
        onUpdate={onUpdate}
        toggleIsOpen={toggleTimerUpdate}
      />
    </>
  );
}
