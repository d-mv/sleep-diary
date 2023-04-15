import { Typography } from '@mui/material';
import { ifTrue } from '@mv-d/toolbelt';

import './Header.css';
import { useStatus } from '../../hooks';
import { PRIMARY, SUCCESS } from '../../theme';

export function Header() {
  const { isAwake } = useStatus();

  return (
    <header className={'Header__container'} style={{ backgroundColor: ifTrue(isAwake(), SUCCESS, PRIMARY) }}>
      <Typography variant='h2' color='#fff'>
        Sleep Diary
      </Typography>
    </header>
  );
}
