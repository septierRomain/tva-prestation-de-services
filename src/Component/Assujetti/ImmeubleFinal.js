import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const ImmeubleFinal = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>

        <button onClick={() => history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
        <p><img src={Check} alt="fleche grise"/>La prestation se rattache à un immeuble situé en France</p>
      </div>

      <hr />
      <div class='square'>
        <p>Les prestations de services se rattachant à un immeuble sont imposables au taux de TVA et dans le pays du lieu de situation de l'immeuble.
        Par exemple : les travaux immobiliers, les prestations des agents immobiliers ou des architectes.

        L'immeuble se situant en France, elles seront donc imposées à la TVA française, dans ce pays (attention, plusieurs taux de TVA existent selon la nature des travaux et l'affectation de l'immeuble).</p>
      </div>
      <hr />

      <h4>Règle générale d'imposition :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition en France</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez en France au taux Français</ul>

      </div>
    </div>
);
}

export default ImmeubleFinal;