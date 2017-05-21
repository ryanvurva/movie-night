import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import TvOverlay from './TvOverlay'
import MovieOverlay from './MovieOverlay'
import ReviewOverlay from './ReviewOverlay'

// import auth from './utils/auth.js'

// import pic from '../images/tv/silicon-valley.jpg'

@observer
class Overlay extends Component {
  _goBack () {
    window.history.back()
  }
  render () {
    return <div className='Overlay'>
      <Route exact path='/overlay/movie/:title' component={MovieOverlay} />
      <Route exact path='/overlay/tv/:title' component={TvOverlay} />
      <Route exact path='/overlay/review/:title' component={ReviewOverlay} />
      {/* <TvOverlay /> */}
      {/* <MovieOverlay /> */}
      {/* <ReviewOverlay /> */}
    </div>
  }
}

export default withRouter(Overlay)
