import dayjs, { Dayjs, extend } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';

extend(customParseFormat);
extend(duration);

export function today() {
  return dayjs().format('h:mm A | dddd, MMMM D');
}

export function elapsedTime(from: Dayjs) {
  const milliseconds = dayjs().diff(from);

  if (milliseconds < 0) return '0:00:00';

  return dayjs.duration(milliseconds).format('H:mm:ss');
}

export function remainingTime(till: Dayjs) {
  const milliseconds = dayjs(till).diff(dayjs());

  if (milliseconds < 0) return '0:00:00';

  return dayjs.duration(milliseconds).format('H:mm:ss');
}

export function formatAtTime(time: Dayjs) {
  return time.format('h:mm A');
}
