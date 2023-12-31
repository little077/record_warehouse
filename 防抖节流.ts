export const throttle = <R, A extends any[]>(
  fn: (...args: A) => R,
  delay: number,
): [(...args: A) => R | undefined, () => void] => {
  let wait = false;
  let timeout: undefined | number;
  let cancelled = false;
  return [
    (...args: A) => {
      if (cancelled) return undefined;
      if (wait) return undefined;

      const val = fn(...args);

      wait = true;

      timeout = window.setTimeout(() => {
        wait = false;
      }, delay);

      return val;
    },
    () => {
      cancelled = true;
      clearTimeout(timeout);
    },
  ];
};

export function debounce<A = unknown, R = void>(
  fn: (args: A) => R,
  ms: number,
): [(args: A) => Promise<R>, () => void] {
  let timer: NodeJS.Timeout;

  const debounceFunc = (args: A): Promise<R> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        resolve(fn(args));
      }, ms);
    });

  const clearDebounce = () => clearTimeout(timer);
  return [debounceFunc, clearDebounce];
}
