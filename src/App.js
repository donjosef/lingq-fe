import React, { useState } from 'react'
import FirstLogPage from './pages/FirstLogPage/FirstLogPage'
import Layout from './components/Layout/Layout'
import Courses from './pages/Courses/Courses'
import Course from './pages/Course/Course'
import Lesson from './pages/Lesson/Lesson'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { CategoryProvider } from './Context/CategoryContext'

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
          <CategoryProvider>
            <Layout>
              <Switch>
                <Route exact path="/courses/:page(\d+)?" component={Courses} />
                <Route exact path="/courses/:category?/:page(\d+)?" component={Courses} />
                <Route path="/course/:pk" component={Course} />
                <Route path="/lesson/:contentId" component={Lesson} />
                <Redirect from="/" to="/courses" />
              </Switch>
            </Layout>
          </CategoryProvider>
        )}
    </div>
  );
}

export default App;
