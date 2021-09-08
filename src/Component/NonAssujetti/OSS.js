import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const OSS = () => {
  return ( 
    <div className='wrap'>
      <Banner />
      <div>

      <Link to='/UE'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>La preneur est établi en Union Européenne</p>
        <p><img src={Check} alt="fleche grise"/>Vous faites plus de 10 000€ de CA vers l'Union Européenne</p>
      </div>

      <h4>La procédure :</h4>
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