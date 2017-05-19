import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

import auth from './utils/auth'

// import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class MovieOverlay extends Component {
  render () {
    return <div className='Overlay'>
      <div className='inner'>
        <div className='Review-image'>
          {/* ... */}
          {/* <img src={fifthElement} alt='' width='60%' /> */}
        </div>
        <div className='Review-info'>
          <p>The Fifth Element</p>
          <p>(1997)</p>
          {auth.isSignedIn ? <Buttons /> : null}
          <NavLink to='/'>x</NavLink>
        </div>
      </div>
    </div>
  }
}

export default MovieOverlay
