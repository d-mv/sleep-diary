import { Typography } from '@mui/material';
import { ifTrue } from '@mv-d/toolbelt';

import './Header.css';
import { useStatus } from '../../hooks';
import { SUCCESS } from '../../theme';

export function Header() {
  const { isAwake } = useStatus();

  return (
    <header className={'Header__container'} style={{ backgroundColor: ifTrue(isAwake(), SUCCESS) }}>
      <Typography variant='h3' color={ifTrue(isAwake(), '#fff')}>
        Sleep Diary
      </Typography>
    </header>
  );
}
