import { useState, useRef, useCallback, useEffect } from "react";

export default function useTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timer = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (isActive) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timer.current) clearInterval(timer.current);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [isActive]);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setTime(0);
  }, [stop]);

  return { time, start, stop, reset };
}
