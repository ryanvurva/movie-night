import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'
import LikeButtons from './LikeButtons'

import auth from './utils/auth'

import pic from '../images/tv/silicon-valley.jpg'

@observer
class TvOverlay extends Component {
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
            <h2>Silicon Valley</h2>
            <p>(2014)</p>
            <p>TV-MA</p>
          </div>
          <div className='userPopularity'>
            <NavLink to='/reviews/:show'>12 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
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

export default TvOverlay
