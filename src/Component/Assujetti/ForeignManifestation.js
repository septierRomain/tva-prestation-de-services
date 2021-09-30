import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const ForeignManifestation = () => {
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
        <p><img src={Check} alt="fleche grise"/>Il s'agit d'une manifestation culturelle, sportive, scientifique...</p>
        <p><img src={Check} alt="fleche grise"/>La manifestation n'a pas lieu en France</p>
      </div>

      <hr />
      <div class='square'>
        <p>Les prestations de services fournies à un assujetti, ainsi que celles qui leur sont accessoires, consistant à donner accès à des manifestations culturelles, artistiques, sportives, scientifiques, éducatives, de divertissement ou similaires, telles que les foires et les expositions lorsque ces manifestations ne sont pas imposables en France si elles n'ont pas effectivement lieu en France.</p>
      </div>
      <hr />

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition dans le pays du preneur</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez dans le pays du preneur au taux de tva du pays</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Etablir la déclaration d'echange de services</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default ForeignManifestation;