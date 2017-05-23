import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import * as api from './utils/api'
// import store from './utils/store'
// import auth from './utils/auth'

// import Buttons from './Buttons'

@observer
class Card extends Component {
  render () {
    return <div className='Card'>
      <div className='Card-image'>
        <NavLink to={`/overlay/movie/${this.props.title}`}><img src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/movie/${this.props.title}`}><p>{this.props.title}</p></NavLink>
        <p>({this.props.date})</p>
      </div>
    </div>
  }
}

export default Card
