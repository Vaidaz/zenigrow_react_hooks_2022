import { useState, useEffect } from 'react';

const getTime = () => new Date().toLocaleTimeString();

const Timer = () => {

  const [showTime, setShowTime] = useState(false);
  const toggleTime = () => setShowTime(!showTime);

  const [interval, setInterval] = useState(1000);
  const updateInterval = (e) => setInterval(e.target.value);

  return (
    <>
      <button onClick={toggleTime}>{showTime ? 'Hide' : 'Show'} time</button>
      <input placeholder='Interval' value={interval} onChange={updateInterval} type="number" maxLength={5} />
      <br/>
      {showTime && <Time delay={interval} />}
    </>
  )
}

const Time = ({ delay }) => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('##', getTime());
      setTime(getTime());
    }, [delay]);

    return () => clearInterval(interval);
  }, [delay]);

  return time;
};

export default Timer;
