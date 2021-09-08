import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const Transport = () => {
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/immaterielles'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
        </div>

      <h4>S'agit il d'une des prestations de transport ?</h4>

        <div className="select_container">
          <Link to='/'><button className='select'>Oui</button></Link>
          <Link to='/transport'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default Transport;