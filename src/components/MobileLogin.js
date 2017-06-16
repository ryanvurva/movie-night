import React, { Component } from 'react'
import { observer } from 'mobx-react'

import auth from './utils/auth'
import ui from './utils/ui'

@observer
class LogIn extends Component {
  render () {
    return <div className='Login'>
      <div className='loginAvatar'>
        {auth.isSignedIn ? <img src={auth.profile.picture} /> : <i className='fa fa-user-circle-o' aria-hidden='true' />}
      </div>
      {auth.isSignedIn ? <button onClick={() => { auth.signOut(); ui.toggleMenu() }}>Logout</button> : <button onClick={() => auth.signIn()}>Log in/Sign up</button>}
    </div>
  }
}

export default LogIn
