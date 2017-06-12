import React, { Component } from 'react'

import auth from './utils/auth'

class Splash extends Component {
  render () {
    return <div className='Splash'>
      <div>
        <h1>Welcome to <span>movieNight</span></h1>
        <p>A website where you can browse movies and tv and create lists of things you have watched or want to watch.  You can also write reviews of your own.  Then you can go to your friends profiles and look over and comment on their choices and reviews.  Have fun!</p>
        <button onClick={() => auth.signIn()}><i className='fa fa-lock' aria-hidden='true' /> - Log in/Sign up</button>
      </div>
    </div>
  }
}

export default Splash
