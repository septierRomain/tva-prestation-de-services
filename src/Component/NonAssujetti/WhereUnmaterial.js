import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const WhereUnmaterial = () => {
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/transport'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
        </div>

      <h4>Le preneur est il établi en France ou dans un autre Etat d'UE ?</h4>

        <div className="select_container">
          <Link to='/France'><button className='select'>Oui</button></Link>
          <Link to='/non_soumis_hors_ue'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default WhereUnmaterial;