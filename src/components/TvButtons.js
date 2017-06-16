import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Buttons extends Component {
  render () {
    return <div className='Buttons'>
      <NavLink to='#'><i className='fa fa-university' aria-hidden='true' /></NavLink>
      <NavLink to='#'><i className='fa fa-eye' aria-hidden='true' /></NavLink>
      <NavLink to={`/overlay/review/tv/${this.props.id}`}><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
    </div>
  }
}

export default Buttons
