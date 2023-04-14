import { Typography } from '@mui/material';
import { ifTrue } from '@mv-d/toolbelt';

import { SUCCESS } from '../../theme';
import { useStatus } from '../../hooks';

export function Status() {
  const { isAwake, status } = useStatus();

  return (
    <div>
      <Typography variant='h2' style={{ fontWeight: 700 }} color={ifTrue(isAwake(), SUCCESS, 'primary')}>
        {status.toUpperCase()}
      </Typography>
    </div>
  );
}
