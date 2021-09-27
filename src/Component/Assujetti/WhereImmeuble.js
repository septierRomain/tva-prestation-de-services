import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const WhereImmeuble = () => {
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
        <p><img src={Check} alt="fleche grise"/>La prestation se rattache à un immeuble</p>
      </div>

      <h2>L'immeuble est il situé en France ?</h2>
      <div className="select_container">
        <Link to='/immeuble_imposition' ><button className='select'>Oui</button></Link>
        <Link to='/immeuble_autres' ><button className='select'>Non</button></Link>
      </div>

      </div>
    </div>
);
}

export default WhereImmeuble;