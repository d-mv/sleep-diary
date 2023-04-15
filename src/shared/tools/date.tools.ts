import dayjs from 'dayjs';

export function today() {
  return dayjs().format('h:mm A | dddd, MMMM D');
}
