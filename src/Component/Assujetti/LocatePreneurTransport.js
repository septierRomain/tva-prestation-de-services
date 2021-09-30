import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const WhereTransport = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>

        <button onClick={() => history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>Il s'agit d'une prestation de location de moyen de transport longue durée</p>
      </div>

      <h2>Le preneur est il établi en France ?</h2>
      <div className="select_container">
        <Link to='France3' ><button className='select'>Oui</button></Link>
        <Link to='location_hors_france' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default WhereTransport;