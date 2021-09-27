import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const Immeuble = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
      </div>

      <h2>S'agit il de prestations se rattachant à un immeuble ?</h2>
      <div className="select_container">
        <Link to='/localisation_immeuble' ><button className='select'>Oui</button></Link>
        <Link to='/prestations2' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default Immeuble;