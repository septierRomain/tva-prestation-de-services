import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Assujetti from './Component/Assujetti';
import Where from './Component/Assujetti/LocatePreneur';
import SecondPrestation from './Component/Assujetti/SecondPrestation';
import Foreign from './Component/Foreign';
import France from './Component/France';
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
          <Route exact path='/France'>
            <France />
          </Route>
          <Route exact path='/SecondPrestation'>
            <SecondPrestation />
          </Route>
          <Route exact path='/LocatePreneur'>
            <Where />
          </Route>
          <Route exact path='/Foreign'>
            <Foreign />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
