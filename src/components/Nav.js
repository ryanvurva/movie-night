import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import gravatar from 'gravatar'
import ui from '../ui'
import auth from './utils/auth'

import blankUser from '../images/user.svg'

class Nav extends Component {
  render () {
    return <header>
      <nav className='Desktop'>
        <div className='Logo'>
          <h1 data-heading='N'><NavLink to='/'>movieNight</NavLink></h1>
        </div>
        <div className='desktopSearch'>
          <div>
            <input type='search' placeholder='search' />
          </div>
          {/* TODO */}
          <div className='Login'>
            <div className='loginAvatar'>
              <img src={gravatar.url('ryanvurva@gmail.com')} />
            </div>
            <button onClick={() => auth.signIn()}>Log in/Sign up</button>
          </div>
        </div>
        {/* <div className='Login'>
          <input type='search' placeholder='search' /> */}
        {/* <button><i className='fa fa-user' aria-hidden='true' /> Log in/Sign up</button> */}
        {/* <button><img src={blankUser} /> Log in/Sign up</button>
        </div> */}
      </nav>
      <nav className='Mobile'>
        <div className='Logo'>
          <NavLink to='/'><h1 data-heading='N'>mN</h1></NavLink>
        </div>
        <div className='Login'>
          <button onClick={() => ui.toggleMenu()}><i className='fa fa-bars' aria-hidden='true' /></button>
        </div>
      </nav>
    </header>
  }
}

export default Nav
