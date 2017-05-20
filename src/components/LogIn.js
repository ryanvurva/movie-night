import React, { Component } from 'react'
import { observer } from 'mobx-react'
import gravatar from 'gravatar'

import auth from './utils/auth'
import ui from '../ui'
import blankUser from '../images/user.svg'

@observer
class LogIn extends Component {
  render () {
    return <div className='Login'>
      <div className='loginAvatar'>
        {auth.isSignedIn ? <img src={gravatar.url('ryanvurva@gmail.com')} /> : <img src={blankUser} />}
        {/* <img src={auth.isSignedIn ? gravatar.url('ryanvurva@gmail.com') : blankUser} /> */}
      </div>
      {auth.isSignedIn ? <button onClick={() => auth.signOut()}>Logout</button> : <button onClick={() => auth.signIn()}>Log in/Sign up</button>}
      {/* <button onClick={() => auth.signIn()}>Log in/Sign up</button> */}
    </div>
  }
}

export default LogIn
