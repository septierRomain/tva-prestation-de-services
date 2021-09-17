import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const OSS = () => {
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
        <p><img src={Check} alt="fleche grise"/>La preneur est établi en Union Européenne</p>
        <p><img src={Check} alt="fleche grise"/>Vous faites plus de 10 000€ de CA vers l'Union Européenne</p>
      </div>

      <h4>Règle générale d'imposition :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition dans le pays du preneur au taux de ce pays</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez en via l'OSS ou la déclaration nationale du pays</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default OSS;