import React from 'react'
import { Link,useHistory } from 'react-router-dom'

import Banner from '../App/Banner'
import ModalImaterial from '../Modal/immaterielles'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const SecondPrestation = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>

        <button onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
      </div>

      <h4>S'agit il d'une des prestations suivantes ?</h4>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations ne se rattachant pas à un bien immeuble</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les transports de biens</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les expertises et travaux portant sur des biens meubles corporels</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations immatérielles <ModalImaterial /> </ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations de stockage accompagnées de prestations complexes</ul>
      <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Les prestations de services liées à des activités culturelles, artistiques, sportives, scientifiques, éducatives... <br /> Mais ne consistant pas à donner accès à des manifestations de ce type</ul>

      <div className="select_container">
        <Link to='/preneur'><button className='select'>Oui</button></Link>
        <Link to='/immeuble'><button className='select'>Non</button></Link>
      </div>
      
      </div>
    </div>
);
}

export default SecondPrestation;