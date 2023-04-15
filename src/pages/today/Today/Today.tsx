import { ifTrue } from '@mv-d/toolbelt';
import { Typography } from '@mui/material';

import { Asleep } from '../Asleep';
import { Awake } from '../Awake';
import { LazyLoad, today, useStatus } from '../../../shared';

import './Today.css';

export function Today() {
  const { isAwake } = useStatus();

  const renderAsleep = () => <Asleep />;

  const renderAwake = () => <Awake />;

  return (
    <div className='Today__container'>
      <div className='Today__timestamp_container'>
        <Typography variant='h4'>{today()}</Typography>
      </div>
      <LazyLoad>{ifTrue(isAwake(), renderAwake, renderAsleep)}</LazyLoad>
    </div>
  );
}
