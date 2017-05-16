import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import fifthElement from '../images/movies/fifth-element.jpg'
import boondockSaints from '../images/movies/boondock-saints.jpg'
import Logan from '../images/movies/Logan.jpg'
import rogueOne from '../images/movies/rogue-one.jpg'
import Saul from '../images/tv/better-call-saul.jpg'
import Thrones from '../images/tv/game-of-thrones.jpg'
import houseCards from '../images/tv/house-cards.gif'
import rickMorty from '../images/tv/rick-morty.jpg'

class Home extends Component {
  render () {
    return <div className='Home'>
      <section>
        <div className='Home-title'>
          <h2>New Realease Movies</h2>
          <NavLink to='/movies/new-releases'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Card'>
            <div className='Home-image'>
              <img src={fifthElement} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>The Fifth Element</p>
              <p>(1997)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <img src={boondockSaints} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>The Boondock Saints</p>
              <p>(1999)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <img src={Logan} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>Logan</p>
              <p>(2017)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <img src={rogueOne} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>Rogue One</p>
              <p>(2016)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Card'>
            <div className='Home-image'>
              <img src={Saul} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>Better Call Saul</p>
              <p>(2016)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <img src={Thrones} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>Game of Thrones</p>
              <p>(2011)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <img src={houseCards} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>House of Cards</p>
              <p>(2013)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <img src={rickMorty} alt='' width='100%' />
            </div>
            <div className='Home-info'>
              <p>Rick & Morty</p>
              <p>(2013)</p>
              <button><i className='fa fa-university' aria-hidden='true' /></button>
              <button><i className='fa fa-eye' aria-hidden='true' /></button>
              <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Home
