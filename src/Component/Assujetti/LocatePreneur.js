import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const Where = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>

        <button onClick={() => history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur est assujetti a la TVA</p>
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

      <h2>Le preneur est il établi en France ?</h2>
      <div className="select_container">
        <Link to='France2' ><button className='select'>Oui</button></Link>
        <Link to='non_etabli_en_France' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default Where;