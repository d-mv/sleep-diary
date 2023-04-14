export function Asleep() {
  return (
    <div className='Asleep__container'>
      <p>status: sleeping</p>
      <p>elapsed sleeping time</p>
      {/* if not night */}
      <p>wake up time, expected</p>
      <p>time to sleep, left</p>
      {/* end-if */}
      <button>woke up now</button>
      <p>or</p>
      <p>time input</p>
      <button>update</button>
    </div>
  );
}
