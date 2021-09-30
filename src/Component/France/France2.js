import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import Prestations from '../../Assets/categories/prestation france.png'

const FranceV2 = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti à la TVA.</p>
        <p><img src={Check} alt="fleche grise"/>Le preneur est établi en France.</p>
        <p><img src={Check} alt="fleche grise"/>La prestation entre dans les conditions citées précédemment :</p>
        <div className='breadcrumbs_details' >
          <p>Les prestations ne se rattachant pas à un bien immeuble.</p>
          <p>Les transports de biens.</p>
          <p>Les expertises et travaux portant sur des biens meubles corporels.</p>
          <p>Les prestations immatérielles.</p>
          <p>Les prestations de stockage accompagnées de prestations complexes.</p>
          <p>Les prestations de services liées à des activités culturelles, artistiques, sportives, scientifiques, éducatives... <br />
          Mais ne consistant pas à donner accès à des manifestations de ce type.</p>
        </div>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Imposition en France</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Déclarez en France au taux Français</ul>

      <hr />
        <div className='categorie' >
          <h4>Si vous êtes client Dougs : </h4>
          <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez la catégorie "Prestations de services" avec le bon taux de tva (5.5%, 10% ou 20% selon la nature de votre activité)</ul>
          <img src={Prestations} alt="Categorie UE" />
        </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default FranceV2;