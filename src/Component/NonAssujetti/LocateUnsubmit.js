import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Banner from '../App/Banner'

import GreyArrow from '../../Assets/grey arrow.svg'
import Check from '../../Assets/check.svg'

const WhereUnsubmit = () => {
  let history = useHistory()
  return ( 
    <div className="wrap">
      <Banner />
      <div>

        <button  onClick={() =>history.goBack()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>

      <div className="breadcrumbs">
        <p><img src={Check} alt="fleche grise"/>Le preneur n'est pas assujetti a la TVA</p>
      </div>

      <h2>Le preneur est il établi :</h2>
      <div className="select_container">
        <Link to='FranceFourth' ><button className='select'>En France ? </button></Link>
        <Link to='UE' ><button className='select'>Dans un pays de l'Union-Européenne ?</button></Link>
        <Link to='exoneration_tva' ><button className='select'>Dans un pays en dehors de l'Union-Européenne ?</button></Link>
      </div>

      </div>
    </div>
);
}

export default WhereUnsubmit;