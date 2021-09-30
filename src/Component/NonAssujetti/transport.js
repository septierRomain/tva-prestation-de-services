import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const Transport = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>


        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        </div>

      <h4>S'agit il d'une des prestations de transport ?</h4>

        <div className="select_container">
          <Link to='/prestation_transport'><button className='select'>Oui</button></Link>
          <Link to='/prestations_non_assujetti'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default Transport;