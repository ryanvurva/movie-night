import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import ui from '../ui'

class Buttons extends Component {
  render () {
    return <div className='Buttons'>
      <button><i className='fa fa-university' aria-hidden='true' /></button>
      <button><i className='fa fa-eye' aria-hidden='true' /></button>
      <NavLink to='/review/:id'><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
    </div>
  }
}

export default Buttons
