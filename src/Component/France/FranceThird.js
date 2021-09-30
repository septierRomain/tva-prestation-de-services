import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import Prestations from '../../Assets/categories/prestation france.png'

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

      <hr />
      <div class='square'>
        <p>Les prestations de services fournies à un assujetti, ainsi que celles qui leur sont accessoires, consistant à donner accès à des manifestations culturelles, artistiques, sportives, scientifiques, éducatives, de divertissement ou similaires, telles que les foires et les expositions lorsque ces manifestations ont effectivement lieu en France.</p>
      </div>
      <hr />

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Appliquez le taux de TVA français</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez votre TVA en France</ul>

      <hr />
        <div className='categorie' >
          <h4>Si vous êtes client Dougs : </h4>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez la catégorie "Prestations de services" avec le bon taux de tva</ul>
          <img src={Prestations} alt="Categorie UE" />
        </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default FranceThird;