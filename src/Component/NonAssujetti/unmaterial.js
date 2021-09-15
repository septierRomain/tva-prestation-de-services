import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'
import ModalImaterial from '../Modal/immaterielles';

const Unmaterial = () => {
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

      <h4>S'agit il d'une des prestations immatérielles ?<ModalImaterial /> </h4>

        <div className="select_container">
          <Link to='/preneur_immaterielles'><button className='select'>Oui</button></Link>
          <Link to='/transport'><button className='select'>Non</button></Link>
        </div>

      </div>
    </div>
);
}

export default Unmaterial;