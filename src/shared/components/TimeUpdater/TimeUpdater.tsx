import { ifTrue, setupText } from '@mv-d/toolbelt';

import { MaybeNull } from '../../types';
import { CancelButton, SecondaryButton } from '../Buttons';
import { TimeInput } from '../Inputs';
import './TimeUpdater.css';
import { TEXT } from '../../data';

const TXT = setupText(TEXT)('timeUpdater');

interface Props {
  isOpen: boolean;
  onChange: (value: MaybeNull<string>) => void;
  value: string;
  onUpdate: () => void;
  buttonTitle: string;
  toggleIsOpen: () => void;
}

export function TimeUpdater({ isOpen, onChange, value, onUpdate, buttonTitle, toggleIsOpen }: Props) {
  const renderToggleButton = () => <SecondaryButton title={TXT('enterManually')} size='small' onClick={toggleIsOpen} />;

  const renderInput = () => (
    <div className='TimeUpdater__container'>
      <TimeInput onChange={onChange} value={value} />
      <div className='TimeUpdater__buttons'>
        <SecondaryButton title={buttonTitle} onClick={onUpdate} />
        <CancelButton title='Cancel' size='small' onClick={toggleIsOpen} />
      </div>
    </div>
  );

  return ifTrue(isOpen, renderInput, renderToggleButton);
}
