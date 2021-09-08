import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const LocatePrestation = () => {
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

      <h2>La prestation a-t-elle eu lieu en France ? </h2>
      <div className="select_container">
        <Link to='France' ><button className='select'>Oui</button></Link>
        <Link to='lieu_de_prestation' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default LocatePrestation;