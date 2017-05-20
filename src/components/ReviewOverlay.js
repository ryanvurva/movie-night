import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

import auth from './utils/auth'

import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class MovieOverlay extends Component {
  render () {
    return <div className='Overlay'>
      <div className='inner'>
        <div className='Review-image' />
        <div className='Review-info'>
          <p>The Fifth Element (1997)</p>
          {/* {auth.isSignedIn ? <Buttons /> : null} */}
          <form>
            <textarea placeholder='Write a review...' />
          </form>
          <button>SUBMIT</button><button><NavLink to='/'>x</NavLink></button>
        </div>
      </div>
    </div>
  }
}

export default MovieOverlay
