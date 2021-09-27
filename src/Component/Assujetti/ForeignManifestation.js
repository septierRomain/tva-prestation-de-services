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
        <p><img src={Check} alt="fleche grise"/>La manifestation n'a pas lieu en France</p>
      </div>

      <hr />
      <div class='square'>
        <p>La prestation est imposable dans le pays du preneur.
        Appliquer le taux de TVA du pays du preneur (sauf existence d'un dispositif d'autoliquidation - facturation HT le cas échéant)
        Vous devez vous enregistrer à la TVA auprès de ce pays et y effectuer votre déclaration (sauf existence d'un dispositif d'autoliquidation)
        Un déclaration d'échange de services est à effectuer dès le 1er euro facturé.</p>
      </div>
      <hr />

      <h4>Régle générale d'imposition :</h4>
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