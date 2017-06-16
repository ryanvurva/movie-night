import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import auth from './utils/auth'

@observer
class LogIn extends Component {
  render () {
    return <div className='Login'>
      <div className='loginAvatar'>
        {auth.isSignedIn ? <NavLink to={`/user/${auth.cmsProfileId}`} title='View Profile'><img src={auth.profile.picture} /></NavLink> : <button onClick={() => auth.signIn()}><i className='fa fa-user-circle-o' aria-hidden='true' /></button>}
      </div>
      {auth.isSignedIn ? <button className='logout' onClick={() => auth.signOut()}>Logout</button> : <button onClick={() => auth.signIn()}>Log in/Sign up</button>}
    </div>
  }
}

export default LogIn
