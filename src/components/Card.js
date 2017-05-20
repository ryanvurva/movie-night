import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'

import auth from './utils/auth'

// import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class Card extends Component {
  render () {
    return <div className='Card'>
      <div className='Home-image'>
        <NavLink to={`/movie/${this.props.title}`}><img src={this.props.image} alt='' width='100%' /></NavLink>
      </div>
      <div className='Home-info'>
        <NavLink to='/movie/the-fifth-element'><p>{this.props.title}</p></NavLink>
        <p>({this.props.date})</p>
        {auth.isSignedIn ? <Buttons /> : null}
      </div>
    </div>
  }
}

export default Card
