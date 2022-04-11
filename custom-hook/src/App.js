import useLocalStorage from './hooks/useLocalStorage';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useLocalStorage('messages');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [userName, setUserName] = useState('');

  const handleTextAreChange = (e) => setTextAreaValue(e.target.value);
  const handleSend = () => {
    setMessages([...messages, { sender: userName, timestamp: Date.now(), message: textAreaValue }]);
    setTextAreaValue('');
  };

  const handleUsernameChange = (e) => setUserName(e.target.value);

  return (
    <>
      <input placeholder="Username" value={userName} onChange={handleUsernameChange} />
      <br/>
      <textarea placeholder="Message" rows="5" cols="25" value={textAreaValue} onChange={handleTextAreChange} />
      <br/>
      <button onClick={handleSend}>Send</button>
      <ul>
        {messages.map(message => (
          <li key={message.timestamp}>{new Date(message.timestamp).toLocaleTimeString()} - {message.sender}: {message.message}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
