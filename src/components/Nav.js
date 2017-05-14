import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// need to resolve this cx classnames thing and get
// my dropdown menus working
import cx from 'classnames'
import ui from '../ui'

class Nav extends Component {
  render () {
    return <header>
      <nav className='Desktop'>
        <div className='Logo'>
          <h1 data-heading='N'><NavLink to='/'>movieNight</NavLink></h1>
        </div>
        <div className='Login'>
          <input type='search' placeholder='search' />
          <button onClick={() => ui.toggleMenu()}><i className='fa fa-user' aria-hidden='true' /> MENU</button>
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
