// src/App.jsx

import { useState } from 'react';
import './App.css';

const App = () => {
  const [mode, setMode] = useState('light');



  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  };


  return (
    <>
      <div className={mode}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>
    </>
  );
};

export default App;

