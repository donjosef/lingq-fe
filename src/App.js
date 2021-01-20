import React, { useState, useEffect } from 'react'
import FirstLogPage from './pages/FirstLogPage/FirstLogPage'
import Layout from './components/Layout/Layout'
import Courses from './pages/Courses/Courses'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'

import './App.css';

function App() {
  const [firstLog, setFirstLog] = useState(!localStorage['lang'] || !localStorage['level'])
  const history = useHistory()

  const handleLogin = () => {
    setFirstLog(false)
    history.replace('/courses')
  }

  return (
    <div className="App">
      {firstLog ? (
        <>
          <Switch>
            <Route exact path="/">
              <FirstLogPage onLogin={handleLogin} />
            </Route>
            <Route>
              <h1>Not found</h1>
            </Route>
          </Switch>

        </>
      ) : (
          <Layout>
            <Switch>
              <Route path="/courses/:page?" component={Courses} />
              <Redirect from="/" to="/courses" />
            </Switch>
          </Layout>
        )}
    </div>
  );
}

export default App;
