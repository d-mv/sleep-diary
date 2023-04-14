import { TimeField } from '@mui/x-date-pickers';

import { MaybeNull } from '../../../types';

interface Props {
  value: string;
  onChange: (value: MaybeNull<string>) => void;
}

export function TimeInput({ value, onChange }: Props) {
  return (
    <div>
      <TimeField value={value} onChange={onChange} />
    </div>
  );
}
