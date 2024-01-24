import React, { useState } from 'react';
import UserContextProvider from './context/UserContextProvider'; // Assuming the correct path and filename
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div>
        <h1>Hello!</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
