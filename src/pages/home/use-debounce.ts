import { useEffect, useMemo } from "react";

export function createDebounce(wait = 100) {
  let timeout: NodeJS.Timeout | undefined;

  const clear = () => {
    if (timeout !== undefined) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  };

  const call = (
    debounceCallback: (...arg: any[]) => any,
    forceWait?: number
  ) => {
    clear();

    timeout = setTimeout(() => {
      debounceCallback();
    }, forceWait || wait);
  };

  return {
    call,
    clear,
    wait,
  };
}

export function useDebounce(wait: number = 100) {
  const created = useMemo(() => createDebounce(wait), [wait]);

  useEffect(() => {
    return () => created.clear();
  }, [created]);

  return created.call;
}
