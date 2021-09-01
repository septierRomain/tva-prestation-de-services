import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Assujetti from './Component/Assujetti';
import Home from './Component/Home';
import NonAssujetti from './Component/NonAssujetti';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Assujetti'>
            <Assujetti />
          </Route>
          <Route exact path='/NonAssujetti'>
            <NonAssujetti />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
