import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const LocationVehiculeFinal = () => {
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
        <p><img src={Check} alt="fleche grise"/>il s'agit de location de moyens de transport de longue durée</p>
      </div>

      <h4>Règle générale d'imposition :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Bateaux de plaisance : prestations situées en France donc imposables à la TVA française si le preneur non assujetti est établi en France ou si le preneur non assujetti est non établi en France et que la mise à disposition est faite en France (prestataire français impérativement).</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Autres que les bateaux de plaisance : prestations situées en France donc imposables en France si le preneur est établi en France ou si le preneur est hors d’UE mais que le service est utilisé en France.</ul>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default LocationVehiculeFinal;