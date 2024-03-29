import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import Prestation from '../../Assets/categories/prestation france.png'

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

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Bateaux de plaisance : prestations situées en France donc imposables à la TVA française si le preneur non assujetti est établi en France ou si le preneur non assujetti est non établi en France et que la mise à disposition est faite en France (prestataire français impérativement).</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Autres que les bateaux de plaisance : prestations situées en France donc imposables en France si le preneur est établi en France ou si le preneur est hors d’UE mais que le service est utilisé en France.</ul>

      <hr />
        <div className='categorie' >
          <h4>Si vous êtes client Dougs : </h4>
          <h5>La prestation est imposable en France selon les critères ci-dessus :</h5>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />
          Sélectionnez la catégorie "Prestations de services" avec le bon taux de tva selon la nature de votre activité</ul>
          <img src={Prestation} alt="Categorie UE" />
          <h5>La prestation n'est pas imposable en France selon les critères ci-dessus :</h5>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />
          Non imposable en France - Imposition dans le pays du preneur</ul>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />
          Déclarez dans le pays au taux du pays</ul>
        </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default LocationVehiculeFinal;