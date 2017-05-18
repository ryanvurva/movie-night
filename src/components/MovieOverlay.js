import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

import auth from './utils/auth'

import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class MovieOverlay extends Component {
  render () {
    return <div className='MovieOverlay'>
      <div className='inner'>
        <div className='Home-image'>
          <img src={fifthElement} alt='' width='100%' />
        </div>
        <div className='Home-info'>
          <p>The Fifth Element</p>
          <p>(1997)</p>
          {auth.isSignedIn ? <Buttons /> : null}
        </div>
      </div>
    </div>
  }
}

export default MovieOverlay
