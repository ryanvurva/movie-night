import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import Buttons from './Buttons'
import LikeButtons from './LikeButtons'

import auth from './utils/auth'

import pic from '../images/movies/Logan.jpg'

@observer
class ReviewOverlay extends Component {
  _goBack () {
    window.history.back()
  }
  render () {
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={pic} />
        {/* <div className='userFeatures'>
          {auth.isSignedIn ? <Buttons /> : null}
        </div> */}
      </div>
      <div className='overlayRight'>
        <div className='overlayHeader'>
          <div className='Title'>
            <div>
              <h2>Logan</h2>
            </div>
            <p>(2017)</p>
            <p>R</p>
          </div>
          <div className='userPopularity'>
            <NavLink to='/reviews/:movie'>58 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div>
        </div>
        <div className='aboutThis'>
          <form>
            <textarea placeholder='What is YOUR opinion?' />
          </form>
        </div>
        <div className='exitOverlay'>
          <button><i className='fa fa-sign-in' aria-hidden='true' /> submit</button>
          <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
        </div>
      </div>
    </div>
  }
}

export default ReviewOverlay
