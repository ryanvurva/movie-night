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
        <NavLink to={`/overlay/tv/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342${this.props.image}`} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/tv/${this.props.id}`}><p>{this.props.title}</p></NavLink>
        <p>({this.props.date})</p>
      </div>
    </div>
  }
}

export default Card
