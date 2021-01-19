import React, {useState, useEffect } from 'react'
import FirstLogPage from './pages/FirstLogPage/FirstLogPage'

import './App.css';

function App() {
  const [firstLog, setFirstLog] = useState(!localStorage['lang'] || !localStorage['level'])

  const handleLogin = () => {
    setFirstLog(false)
  }

  return (
    <div className="App">
      {firstLog ? <FirstLogPage onLogin={handleLogin} /> : 'COURSES'}
    </div>
  );
}

export default App;
