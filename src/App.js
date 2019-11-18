import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/login'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  )
}

export default App
