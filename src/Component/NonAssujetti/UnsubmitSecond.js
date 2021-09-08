import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const UnsubmitSecond = () => {
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

      <h4>S'agit il d'une des prestations suivantes ?</h4>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations de services ayant pour objet des activités culturelles, artistiques, sportives, scientifiques, éducatives, de divertissement ou similaires, telles que les foires et les expositions, y compris les prestations de services des organisateurs de telles activités, ainsi que les prestations de services accessoires à ces activités, hébergements et ventes à consommer sur place</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Ttravaux et expertises sur biens meubles corporels</ul>

        <div className="select_container">
          <Link to='/lieu_de_prestation'><button className='select'>Oui</button></Link>
          <Link to='/location_vehicule'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default UnsubmitSecond;