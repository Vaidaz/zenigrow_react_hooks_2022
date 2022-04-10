import { useEffect, useState } from 'react';

const getTime = () => new Date().toLocaleTimeString();

const Timer = () => {
  const [showTime, setShowTime] = useState(false);
  const toggleTime = () => setShowTime(!showTime);

  const [interval, setInterval] = useState(1000);
  const updateInterval = (e) => setInterval(e.target.value);

  return (
    <>
      <button onClick={toggleTime}>{showTime ? 'Hide' : 'Show'} time</button>
      <input placeholder='Interval' value={interval} onChange={updateInterval} />
      <br/>
      {showTime && <Time intervalTime={interval} />}
    </>
  )
}

const Time = ({ intervalTime }) => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return time;
};

export default Timer;
