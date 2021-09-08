import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const UnsubmitOthers = () => {
  return ( 
<div className='wrap'>
      <Banner />
      <div>

      <Link to='/location_vehicule'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />En dehors des cas spécifiques mentionnés précédemment, le lieu des prestations de services  est situé en France lorsque le prestataire est établi en France ou dispose en France d’un établissement stable à partir duquel les services sont dispensés.</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Dans le cas où ce prestataire français dispose d’un établissement stable dans un autre pays et que la prestation est réalisée depuis cet autre pays, la prestation est imposable dans ce dernier.</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default UnsubmitOthers;