import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const UnsubmitOthers = () => {
  let history = useHistory()
  return ( 
<div className='wrap'>
      <Banner />
      <div>

        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
      </div>

      <h4>Régle générale d'imposition :</h4>
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