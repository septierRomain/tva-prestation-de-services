import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const SecondPrestation = () => {
  return ( 
    <div className="wrap">
      <Banner />
      <div>

      <Link to='/Assujetti'>
        <button className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
      </Link>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
      </div>

      <h4>S'agit il d'une des prestations suivantes ?</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations ne se rattachant pas à un bien immeuble</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les transports de biens</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Expertises et travaux portant sur des biens meubles corporels</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations immatérielles consistant en cessions et concessions de droits, location de biens meubles corporels autres que les moyens de transport, prestations de publicité, prestations des conseillers / ingénieurs / bureaux d’études / experts-comptables, traitement des données et fourniture d’informations</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations de stockage accompagnées de prestations complexes</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Prestations de services liées à des activités culturelles, artistiques, sportives, scientifiques, éducatives...Mais ne consistant pas à donner accès à des manifestations de ce type</ul>

      <div className="select_container">
        <Link to='/LocatePreneur'><button className='select'>Oui</button></Link>
        <Link to='/#'><button className='select'>Non</button></Link>
      </div>
      
      </div>
    </div>
);
}

export default SecondPrestation;