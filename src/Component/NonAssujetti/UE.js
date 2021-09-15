import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const UE = () => {
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
        <p><img src={Check} alt="fleche grise"/>Le preneur est établi dans l'Union Européenne</p>
      </div>

      <h2>Vous avez réalisé plus de 10 000 € de chiffre d'affaires sur l'année civile  au titre des ventes à distance intracommunautaires et  des prestations de télécommunications, les services de radiodiffusion et de télévision ainsi que les services fournis par voie électronique effectués auprès de personnes non assujetties ou  avez opté pour l'OSS / IOSS</h2>
      <div className="select_container">
        <Link to='/OSS' ><button className='select'>Oui</button></Link>
        <Link to='/France_non_soumis' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default UE;