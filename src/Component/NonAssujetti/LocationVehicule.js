import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const LocationVehicule = () => {
  return ( 
    <div className="wrap">
      <Banner />
      <div>

      <Link to='/prestations_non_assujetti'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
      </div>

      <h2>S'agit il d'une location de moyens de transport de longue durée ?</h2>
      <div className="select_container">
        <Link to='location_vehicule_procedure' ><button className='select'>Oui</button></Link>
        <Link to='autres_non_assujetti' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default LocationVehicule;