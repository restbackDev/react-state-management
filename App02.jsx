const [user, setUser] = useState({
  firstName: "Jason",
  lastName: "Almero",
  hasPets: "false",
  age: 25,
})
console.log(`Hello, my name is ${user.firstName} ${user.lastName},
I am ${user.age} years old, and ${user.hasPets? "I have pets":"I have no pets"}`)

// src/App.jsx

import { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    console.log('Dark Mode!');
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    console.log('Light Mode!');
    setIsDarkMode(false);
  };

  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={handleDarkMode}>Dark Mode</button>
        <button onClick={handleLightMode}>Light Mode</button>

      </div>
    </>
  );
};

export default App;
