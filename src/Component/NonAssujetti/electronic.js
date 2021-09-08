import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const Electronic = () => {
  return ( 
    <div className="wrap">
      <Banner />
      <div>
      <Link to='/'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

        <div className="breadcrumbs">
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
        </div>

      <h4>S'agit il d'une des prestations suivantes ?</h4>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />télécommunication, télévision, radiodiffusion, services fournis par voie électronique</ul>

        <div className="select_container">
          <Link to='/preneur_non_assujetti'><button className='select'>Oui</button></Link>
          <Link to='/#'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default Electronic;