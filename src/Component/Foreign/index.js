import React from 'react'
import { useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import Redo from '../App/Redo'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'
import PrestationExo from '../../Assets/categories/prestation exo.png'

const Foreign = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas établi en France.</p>
      </div>

      <h4>La procédure :</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />La prestation n'est pas imposable en France, la TVA française ne doit donc pas être appliquée.</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />La facture est établie hors taxes.</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Vous devez vous enregistrer à la TVA auprès de ce pays et y effectuer votre déclaration (sauf existence d'un dispositif d'autoliquidation)</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Une déclaration d'échange de services est à effectuer dès le 1er euro facturé.</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Le prestataire français établit une facture sans TVA. Il porte la mention « autoliquidation » sur la facture si le client est un assujetti établi dans l'UE. <br /> Il indique « TVA non applicable – art. 259-1 du CGI » si le client est un assujetti établi hors de l'UE.</ul>

      <hr />
      <div className='categorie' >
        <h4>Si vous êtes client Dougs : </h4>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Sélectionnez la catégorie "Prestations de services exonérées"</ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Indiquez la raison “vente en Union Européenne" ou "vente hors Union Européenne”</ul>
        <img src={PrestationExo} alt="Categorie UE" />
      </div>

      <div className="button">
        <Redo />
      </div>

      </div>
    </div>
);
}

export default Foreign;