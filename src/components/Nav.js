import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import ui from './utils/ui'

import Login from './Login'
import Searchform from './Searchform'

class Nav extends Component {
  render () {
    return <header>
      <nav className='Desktop'>
        <div className='Logo'>
          <h1 data-heading='N'><NavLink to='/'>movieNight</NavLink></h1>
        </div>
        <div className='desktopSearch'>
          <div>
            <Searchform />
          </div>
          <Login />
        </div>
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
