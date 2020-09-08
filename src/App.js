import React from 'react';
import './App.css';

import Home from './pages/Home'
import Trails from './pages/Trails'
import SingleTrail from './pages/SingleTrail'
import Error from './pages/Error'

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trails/" component={Trails} />
      <Route exact path="/trails/:name" component={SingleTrail} />
      <Route component={Error} />
    </Switch>
  </div>
  )
}

export default App;
