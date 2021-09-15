import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Assujetti from './Component/Assujetti';
import FourthPrestation from './Component/Assujetti/FourthPrestation';
import Where from './Component/Assujetti/LocatePreneur';
import SecondPrestation from './Component/Assujetti/SecondPrestation';
import ThirdPrestation from './Component/Assujetti/ThirdPrestation';
import Foreign from './Component/Foreign';
import HorsUE from './Component/Foreign/HorsUE';
import France from './Component/France';
import FranceThird from './Component/France/FranceThird';
import Others from './Component/France/Others';
import Home from './Component/Home';
import NonAssujetti from './Component/NonAssujetti';
import Electronic from './Component/NonAssujetti/electronic';
import ForeignUnsubmit from './Component/NonAssujetti/ForeignUnsubmit';
import FranceUnsubmit from './Component/NonAssujetti/FranceUnsubmit';
import LocatePrestation from './Component/NonAssujetti/LocatePrestation';
import WhereUnsubmit from './Component/NonAssujetti/LocateUnsubmit';
import LocationVehicule from './Component/NonAssujetti/LocationVehicule';
import LocationVehiculeFinal from './Component/NonAssujetti/LocationVehiculeFinal';
import OSS from './Component/NonAssujetti/OSS.js';
import Transport from './Component/NonAssujetti/transport';
import TransportFinal from './Component/NonAssujetti/TransportFinal';
import UE from './Component/NonAssujetti/UE';
import Unmaterial from './Component/NonAssujetti/unmaterial';
import UnsubmitOthers from './Component/NonAssujetti/UnsubmitOthers';
import UnsubmitSecond from './Component/NonAssujetti/UnsubmitSecond';
import WhereUnmaterial from './Component/NonAssujetti/WhereUnmaterial';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          
          <Route exact path='/'component={Home} />
          
          {/* Routes pour les assujetti */}
          <Route exact path='/Assujetti' component={Assujetti} />
          <Route exact path='/France' component={France} />
          <Route exact path='/SecondPrestation' component={SecondPrestation} />
          <Route exact path='/LocatePreneur' component={Where} />
          <Route exact path='/Foreign' component={Foreign} />
          <Route exact path='/ThirdPrestation' component={ThirdPrestation} />
          <Route exact path='/FourthPrestation' component={FourthPrestation} />
          <Route exact path='/FranceThird' component={FranceThird} />
          <Route exact path='/autres' component={Others} />

          {/* Routes pour les non assujetti */}
          <Route exact path='/NonAssujetti' component={NonAssujetti} />
          <Route exact path='/preneur_non_assujetti' component={WhereUnsubmit} />
          <Route exact path='/prestation_electronique' component={Electronic} />
          <Route exact path='/exoneration_tva' component={HorsUE} />
          <Route exact path='/UE' component={UE} />
          <Route exact path='/OSS' component={OSS} />
          <Route exact path='/immaterielles' component={Unmaterial} />
          <Route exact path='/preneur_immaterielles' component={WhereUnmaterial} />
          <Route exact path='/non_soumis_hors_ue' component={ForeignUnsubmit} />
          <Route exact path='/transport' component={Transport} />
          <Route exact path='/prestation_transport' component={TransportFinal} />
          <Route exact path='/prestations_non_assujetti' component={UnsubmitSecond} />
          <Route exact path='/lieu_de_prestation' component={LocatePrestation} />
          <Route exact path='/location_vehicule' component={LocationVehicule} />
          <Route exact path='/location_vehicule_procedure' component={LocationVehiculeFinal} />
          <Route exact path='/autres_non_assujetti' component={UnsubmitOthers} />
          <Route exact path='/France_non_soumis' component={FranceUnsubmit} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
