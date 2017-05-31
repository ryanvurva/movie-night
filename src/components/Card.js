import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

@observer
class Card extends Component {
  render () {
    return <div className='Card'>
      <div className='Card-image'>
        <NavLink to={`/overlay/movie/${this.props.id}`}><img src={this.props.image} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/movie/${this.props.id}`}><p>{this.props.title}</p></NavLink>
        <p>({this.props.date})</p>
      </div>
    </div>
  }
}

export default Card
