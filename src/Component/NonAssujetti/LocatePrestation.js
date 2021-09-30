import React from 'react'
import { Link,useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const LocatePrestation = () => {
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
        <p><img src={Check} alt="fleche grise"/>La prestation entre dans les conditions citées précédemment :</p>
        <div className='breadcrumbs_details' >
          <p>Prestations de services ayant pour objet des activités culturelles, artistiques, sportives, scientifiques, éducatives, de divertissement ou similaires, telles que les foires et les expositions, y compris les prestations de services des organisateurs de telles activités, ainsi que les prestations de services accessoires à ces activités, hébergements et ventes à consommer sur place.</p>
          <p>Travaux et expertises sur biens meubles corporels.</p>
        </div>
      </div>

      <h2>La prestation a-t-elle eu lieu en France ? </h2>
      <div className="select_container">
        <Link to='France_non_soumis2' ><button className='select'>Oui</button></Link>
        <Link to='non_soumis_hors_ue2' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default LocatePrestation;