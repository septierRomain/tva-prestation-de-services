import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const Where = () => {
  return ( 
    <div className="wrap">
      <Banner />
      <div>

      <Link to='/LocatePreneur'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
      </div>

      <h2>Le preneur est il établi en France ?</h2>
      <div className="select_container">
        <Link to='France' ><button className='select'>Oui</button></Link>
        <Link to='Foreign' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default Where;