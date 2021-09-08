import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const HorsUE = () => {
  return ( 
<div className='wrap'>
      <Banner />
      <div>

      <Link to='/preneur_non_assujetti'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est assujetti à la TVA</p>
        <p><img src={Check} alt="fleche grise"/>Le preneur est établi en dehors de l'Union Européenne</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Exonéré de TVA</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Facture hors taxes</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Mention « TVA non applicable – art. 259-1 du CGI » sur la facture</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default HorsUE;