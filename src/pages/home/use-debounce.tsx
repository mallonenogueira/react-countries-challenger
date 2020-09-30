import { useEffect, useRef } from "react";

export function createDebounce(wait = 100) {
  let timeout: NodeJS.Timeout;

  const call = (
    debounceCallback: (...arg: any[]) => any,
    forceWait?: number
  ) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      debounceCallback();
    }, forceWait || wait);
  };

  return {
    call,
    clear: () => clearTimeout(timeout),
    wait,
  };
}

export function useDebounce(wait: number) {
  const ref = useRef(createDebounce(wait));

  useEffect(() => {
    if (wait !== ref.current.wait) {
      ref.current.clear();
      ref.current = createDebounce(wait);
    }
  }, [wait]);

  return ref.current.call;
}
