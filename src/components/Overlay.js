import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import TvOverlay from './TvOverlay'
// import MovieOverlay from './MovieOverlay'
import ReviewOverlay from './ReviewOverlay'
// import Buttons from './Buttons'

// import auth from './utils/auth.js'

// import pic from '../images/tv/silicon-valley.jpg'

@observer
class Overlay extends Component {
  _goBack () {
    window.history.back()
  }
  render () {
    return <div className='Overlay'>
      {/* <TvOverlay /> */}
      {/* <MovieOverlay /> */}
      <ReviewOverlay />
    </div>
  }
}

export default Overlay
