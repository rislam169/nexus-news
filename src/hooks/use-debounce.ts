import { useEffect, useState } from "react";

/**
 * Debounces a value with the specified delay.
 *
 * @param value The value to be debounced.
 * @param delay The delay in milliseconds.
 * @returns The debounced value.
 */
export function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
