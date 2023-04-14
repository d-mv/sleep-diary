export function useUpdates() {
  function wentToBed() {
    // eslint-disable-next-line no-console
    console.log('wentToBed');
  }

  return { wentToBed };
}
