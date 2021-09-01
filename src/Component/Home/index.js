import React from 'react';
import { Link } from 'react-router-dom'
import Banner from '../App/Banner';

function Home() {
  return(
    <div id="welcome" className='wrap'>
      <Banner />

      <div id="welcome_banner">
        <h1>Bonjour et bienvenue sur notre simulateur de TVA pour les prestations de services</h1>
        <p>Découvrez en quelques clics les spécificités de votre TVA et de sa déclaration.</p>
        <p>C’est parti !</p>
      </div>

      <div id="assujetti">
        <h2>Le preneur est il assujetti à la TVA ?</h2>
        <div className="select_container">
          <Link to='Assujetti' ><button className='select'>Oui</button></Link>
          <Link to='NonAssujetti' ><button className='select'>Non</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Home