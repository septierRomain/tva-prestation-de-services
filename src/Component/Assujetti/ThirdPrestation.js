import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const ThirdPrestation = () => {
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
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Locations de moyens de transport de longue durée</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations  dont l’objet sont des activités culturelles, artistiques, sportives, scientifiques, éducatives, divertissement mais ne donnant pas accès à des manifestations de cette nature (attention règles spécifiques existant pour les foires et les salons)</ul>

      <div className="select_container">
        <Link to='/LocatePreneur'><button className='select'>Oui</button></Link>
        <Link to='/FourthPrestation'><button className='select'>Non</button></Link>
      </div>
      
      </div>
    </div>
);
}

export default ThirdPrestation;