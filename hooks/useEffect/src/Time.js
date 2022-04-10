import { useState } from 'react';

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
      {showTime && <Time intervalTime={interval} />}
    </>
  )
}

const Time = ({ intervalTime }) => {
  const [time] = useState(getTime());
  return time;
};

export default Timer;
