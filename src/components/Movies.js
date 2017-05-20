import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import auth from './utils/auth.js'
// import ui from '../ui'

// import Card from './Card'
import Buttons from './Buttons'

import Saul from '../images/tv/better-call-saul.jpg'
import Thrones from '../images/tv/game-of-thrones.jpg'
import houseCards from '../images/tv/house-cards.gif'
import rickMorty from '../images/tv/rick-morty.jpg'

class Movies extends Component {
  render () {
    return <div className='Movies'>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/the-fifth-element'><img src={Saul} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/the-fifth-element'><p>Better Call Saul</p></NavLink>
              <p>(2016)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/the-fifth-element'><img src={Thrones} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/the-fifth-element'><p>Game of Thrones</p></NavLink>
              <p>(2011)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/the-fifth-element'><img src={houseCards} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/the-fifth-element'><p>House of Cards</p></NavLink>
              <p>(2013)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/the-fifth-element'><img src={rickMorty} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/the-fifth-element'><p>Rick & Morty</p></NavLink>
              <p>(2013)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Movies
