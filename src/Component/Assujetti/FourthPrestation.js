import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const FourthPrestation = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
      </div>

      <h4>S'agit il d'une des prestations suivantes ?</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />S'agit il de prestations de services, ainsi que celles qui leur sont accessoires, consistant à donner accès à des manifestations culturelles, artistiques, sportives, scientifiques, éducatives, de divertissement ou similaires, telles que les foires et les expositions lorsque ces manifestations ont effectivement lieu en France</ul>

      <div className="select_container">
        <Link to='/France'><button className='select'>Oui</button></Link>
        <Link to='/autres'><button className='select'>Non</button></Link>
      </div>
      
      </div>
    </div>
);
}

export default FourthPrestation;