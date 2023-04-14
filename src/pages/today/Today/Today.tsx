import { Asleep } from '../Asleep';
import { Awake } from '../Awake';

import './Today.css';
import { useStatus } from '../../../shared';
import { ifTrue } from '@mv-d/toolbelt';

export function Today() {
  const { isAwake } = useStatus();

  const renderAsleep = () => <Asleep />;

  const renderAwake = () => <Awake />;

  return (
    <div className='Today__container'>
      <p>Today + date</p>
      {ifTrue(isAwake(), renderAwake, renderAsleep)}
    </div>
  );
}
