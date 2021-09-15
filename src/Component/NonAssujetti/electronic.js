import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import ModalTélécom from '../Modal/télécommunications'
import ModalTV from '../Modal/télévision'
import ModalElectronic from '../Modal/electronic'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import Arrow from '../../Assets/arrow.svg'

const Electronic = () => {
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
          <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
        </div>

      <h4>S'agit il d'une des prestations suivantes ? </h4>
        <ul>
          <img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />
          Télécommunication
          <ModalTélécom />
        </ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Radiodiffusion et de télévision<ModalTV /></ul>
        <ul><img src={Arrow} alt="Fleche verte" style={{transform: 'rotate(180deg)'}} />Services fournis par voie électronique<ModalElectronic /></ul>

        <div className="select_container">
          <Link to='/preneur_non_assujetti'><button className='select'>Oui</button></Link>
          <Link to='/immaterielles'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default Electronic;