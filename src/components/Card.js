import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

import auth from './utils/auth'

import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class Card extends Component {
  render () {
    return <div className='Card'>
      <div className='Home-image'>
        <NavLink to='/movie/the-fifth-element'><img src={fifthElement} alt='' width='100%' /></NavLink>
      </div>
      <div className='Home-info'>
        <NavLink to='/movie/the-fifth-element'><p>The Fifth Element</p></NavLink>
        <p>(1997)</p>
        {auth.isSignedIn ? <Buttons /> : null}
      </div>
    </div>
  }
}

export default Card
