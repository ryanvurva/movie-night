import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import TvOverlay from './TvOverlay'
import MovieOverlay from './MovieOverlay'
import ReviewOverlay from './ReviewOverlay'
import TvReviewOverlay from './TvReviewOverlay'

// import auth from './utils/auth.js'

// import pic from '../images/tv/silicon-valley.jpg'

@observer
class Overlay extends Component {
  render () {
    return <div className='Overlay'>
      <Route exact path='/overlay/movie/:id' component={MovieOverlay} />
      <Route exact path='/overlay/tv/:id' component={TvOverlay} />
      <Route exact path='/overlay/review/movie/:id' component={ReviewOverlay} />
      <Route exact path='/overlay/review/tv/:id' component={TvReviewOverlay} />
    </div>
  }
}

export default withRouter(Overlay)
