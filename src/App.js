import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Assujetti from './Component/Assujetti';
import FourthPrestation from './Component/Assujetti/FourthPrestation';
import Where from './Component/Assujetti/LocatePreneur';
import SecondPrestation from './Component/Assujetti/SecondPrestation';
import ThirdPrestation from './Component/Assujetti/ThirdPrestation';
import Foreign from './Component/Foreign';
import France from './Component/France';
import FranceBis from './Component/France/FranceBis';
import FranceThird from './Component/France/FranceThird';
import Others from './Component/France/Others';
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
          <Route exact path='/FranceBis'>
            <FranceBis />
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
          <Route exact path='/ThirdPrestation'>
            <ThirdPrestation />
          </Route>
          <Route exact path='/FourthPrestation'>
            <FourthPrestation />
          </Route>
          <Route exact path='/FranceThird'>
            <FranceThird />
          </Route>
          <Route exact path='/Autres'>
            <Others />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
