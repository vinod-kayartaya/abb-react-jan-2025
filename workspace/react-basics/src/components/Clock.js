import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // The useEffect hook may return a callback function, which gets executed
  // when the component is unmounted (removed from the DOM).
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cancel the interval job when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h3>{time.toLocaleTimeString()}</h3>;
};

export default Clock;
