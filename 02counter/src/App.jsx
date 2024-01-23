import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 50) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <>
      <h1>Ashu's RSS wing</h1>
      <h2>Rss member's counter: {counter}</h2>

      <button onClick={addValue}>Add members</button>
      <button onClick={removeValue}>Remove Members</button>
    </>
  );
}

export default App;
 