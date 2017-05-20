import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

import auth from './utils/auth'

// import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class MovieOverlay extends Component {
  _goBack () {
    window.history.back()
  }
  render () {
    return <div className='tvOverlay'>
      <div className='inner'>
        <div className='TV-image'>...</div>
        <div className='TV-info'>
          {auth.isSignedIn ? <Buttons /> : null}
          <p>Better Call Saul (2016)</p>
          {/* <div className='Tv-description'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div> */}
          <button><NavLink to='#' onClick={this._goBack}>x</NavLink></button>
        </div>
      </div>
    </div>
  }
}

export default MovieOverlay
