import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const Others = () => {
  return ( 
    <div className='wrap'>
      <Banner />
      <div>

      <Link to='/FourthPrestation'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>La preneur est établi en France</p>
      </div>

      <hr />
      <div class='square'>
        <p>En dehors des cas spécifiques mentionnés précédemment, les prestations de services réalisées au profit d'un assujetti à la TVA sont imposables en France si le preneur assujetti est établi en France, y dispose d'un établissement stable, sauf dans le cas où il dispose d'un établissement stable en dehors de France auquel les services sont fournis</p>
      </div>
      <hr />

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition en France</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez en France au taux Français</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default Others;