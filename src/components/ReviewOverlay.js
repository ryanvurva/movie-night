import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

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
        <div className='userFeatures'>
          {auth.isSignedIn ? <Buttons /> : null}
        </div>
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
            <div className='likes'>
              <button><i className='fa fa-thumbs-o-up' aria-hidden='true' /> 186</button>
              <button><i className='fa fa-thumbs-o-down' aria-hidden='true' /> 9</button>
            </div>
          </div>
        </div>
        <div className='aboutThis'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='exitOverlay'>
          <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
        </div>
      </div>
    </div>
  }
}

export default ReviewOverlay
