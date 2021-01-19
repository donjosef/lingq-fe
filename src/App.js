import React, {useState, useEffect } from 'react'
import FirstLogPage from './pages/FirstLogPage/FirstLogPage'
import Layout from './components/Layout/Layout'
import Courses from './pages/Courses/Courses'

import './App.css';

function App() {
  const [firstLog, setFirstLog] = useState(!localStorage['lang'] || !localStorage['level'])

  const handleLogin = () => {
    setFirstLog(false)
  }

  return (
    <div className="App">
      {firstLog ? (
        <FirstLogPage onLogin={handleLogin} /> 
      ) : (
        <Layout>
          <Courses />
        </Layout>
      )}
    </div>
  );
}

export default App;
