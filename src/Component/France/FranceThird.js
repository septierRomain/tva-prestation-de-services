import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const FranceThird = () => {
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
        <p><img src={Check} alt="fleche grise"/>La prestation à lieu en France</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Lorsque de telles manifestations ont lieu en France, elles sont imposables à la TVA française. <br /> (déclaration de TVA en France + taux français)</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Si elles ont lieu dans un autre pays d'UE ou un pays tiers, alors elles sont imposables dans le pays concerné. <br />Il faut également faire une DES.</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default FranceThird;