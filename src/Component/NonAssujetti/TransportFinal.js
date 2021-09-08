import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const TransportFinal = () => {
  return ( 
<div className='wrap'>
      <Banner />
      <div>

      <Link to='/transport'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>il s'agit de prestations de transports</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations de transport intracommunautaires de biens  dont le lieu de départ du transport est en France sont imposables en France</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations de transport de biens  autres que les transports intracommunautaires de biens et les prestations de transport de passagers, sont imposables en France mais pour les seuls distances parcourues en France</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default TransportFinal;