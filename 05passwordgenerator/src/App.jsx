import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*()_+';

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  return (
    <>
      <h1 className='text-4xl text-center text-black'>Password Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
       <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
       </div>
       
      </div>

      <div className='flex flex-col items-center space-y-4'>
        <label className='text-black'>
          Password Length:
          <input
            type='number'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min='1'
          />
        </label>

        <label className='text-black'>
          Include Numbers:
          <input
            type='checkbox'
            checked={numAllow}
            onChange={() => setNumAllow((prev) => !prev)}
          />
        </label>

        <label className='text-black'>
          Include Special Characters:
          <input
            type='checkbox'
            checked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
          />
        </label>

        <button
          className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-3xl'
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
