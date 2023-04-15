import { Typography } from '@mui/material';

import './DisplayTime.css';

interface Props {
  time: string;
  label: string;
}

export function DisplayTime({ time, label }: Props) {
  return (
    <div className='DisplayTime__container'>
      <Typography variant='body1'>{time}</Typography>
      <Typography variant='subtitle1'>{label}</Typography>
    </div>
  );
}
