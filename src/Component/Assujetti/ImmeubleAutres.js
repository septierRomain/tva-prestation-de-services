import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const ImmeubleAutres = () => {
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
        <p><img src={Check} alt="fleche grise"/>La prestation se rattache à un immeuble non situé en France</p>
      </div>

      <hr />
      <div class='square'>
        <p>Les prestations de services se rattachant à un immeuble sont imposables au taux de TVA et dans le pays du lieu de situation de l'immeuble.
        Par exemple : les travaux immobiliers, les prestations des agents immobiliers ou des architectes.
        <br />
        L'immeuble ne se situant pas en France, les prestations seront imposables dans le pays de localisation du bien, au taux de TVA de celui-ci.</p>
      </div>
      <hr />

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition dans le pays de localisation du bien</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez dans le pays au taux du pays</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default ImmeubleAutres;