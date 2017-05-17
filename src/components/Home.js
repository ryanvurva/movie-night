import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Card from './Card'

// import fifthElement from '../images/movies/fifth-element.jpg'
import boondockSaints from '../images/movies/boondock-saints.jpg'
import Ron from '../images/movies/anchorman.jpg'
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
          {/* card component example idea.  includes login/button change for home page */}
          <Card />
          {/* need to figure out how to pass different values to card component for each individual card */}
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/the-boondock-saints'><img src={boondockSaints} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/the-boondock-saints'><p>The Boondock Saints</p></NavLink>
              <p>(1999)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/anchorman'><img src={Ron} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/anchorman'><p>Anchorman</p></NavLink>
              <p>(2004)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/movie/rogue-one'><img src={rogueOne} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/movie/rogue-one'><p>Rogue One</p></NavLink>
              <p>(2016)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
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
              <NavLink to='/tv/better-call-saul'><img src={Saul} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/better-call-saul'><p>Better Call Saul</p></NavLink>
              <p>(2016)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/game-of-thrones'><img src={Thrones} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/game-of-thrones'><p>Game of Thrones</p></NavLink>
              <p>(2011)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/house-of-cards'><img src={houseCards} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/house-of-cards'><p>House of Cards</p></NavLink>
              <p>(2013)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/rick-and-morty'><img src={rickMorty} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/rick-and-morty'><p>Rick & Morty</p></NavLink>
              <p>(2013)</p>
              <div className='Buttons'>
                <button><i className='fa fa-university' aria-hidden='true' /></button>
                <button><i className='fa fa-eye' aria-hidden='true' /></button>
                <button><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Recent Reviews</h2>
          <NavLink to='/reviews'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Home-review-section'>
            <div className='Critic'>
              <NavLink to='/:name'>someGuy123's</NavLink> opinion about 'Some Movie':
            </div>
            <div className='Opinion'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Home
