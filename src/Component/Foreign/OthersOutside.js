import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const OthersOutside = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>La preneur n'est pas établi en France</p>
      </div>

      <hr />
      <div class='square'>
        <p>En dehors des cas spécifiques mentionnés précédemment, les prestations de services réalisées au profit d'un assujetti à la TVA ne sont pas imposables en France lorsque le preneur assujetti est établi hors de France.<br  />
        Le lieu d'imposition est alors le pays du preneur (Autre pays d'UE ou pays tiers).</p>
      </div>
      <hr />

      <h4>Règle générale d'imposition :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition dans le pays du preneur</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez dans le pays du preneur au taux de tva du pays</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default OthersOutside;