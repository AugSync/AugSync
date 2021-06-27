import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure() {
  const [isDisconnect, setIsDisconnect] = useState(false);
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    ro.observe(ref.current);

    // eslint-disable-next-line no-unused-expressions
    if (isDisconnect) ro.disconnect;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisconnect]);
  return [{ ref }, bounds, setIsDisconnect];
}
