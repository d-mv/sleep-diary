import { TimeField } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

import { MaybeNull } from '../../../types';

interface Props {
  value: Dayjs;
  onChange: (value: MaybeNull<Dayjs>) => void;
}

export function TimeInput({ value, onChange }: Props) {
  return (
    <div>
      {/* @ts-ignore -- type is incorrect */}
      <TimeField value={value} onChange={onChange} />
    </div>
  );
}
