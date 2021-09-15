import React from 'react'
import { Link,useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const LocatePrestation = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
      </div>

      <h2>La prestation a-t-elle eu lieu en France ? </h2>
      <div className="select_container">
        <Link to='France_non_soumis' ><button className='select'>Oui</button></Link>
        <Link to='non_soumis_hors_ue' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default LocatePrestation;