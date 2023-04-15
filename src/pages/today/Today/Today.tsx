import { Asleep } from '../Asleep';
import { Awake } from '../Awake';

import './Today.css';
import { today, useStatus } from '../../../shared';
import { ifTrue } from '@mv-d/toolbelt';
import { Typography } from '@mui/material';

export function Today() {
  const { isAwake } = useStatus();

  const renderAsleep = () => <Asleep />;

  const renderAwake = () => <Awake />;

  return (
    <div className='Today__container'>
      <div className='Today__timestamp_container'>
        <Typography variant='body2'>{today()}</Typography>
      </div>
      {ifTrue(isAwake(), renderAwake, renderAsleep)}
    </div>
  );
}
