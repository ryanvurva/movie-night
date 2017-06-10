import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import moment from 'moment'

@observer
class Card extends Component {
  render () {
    let newDate = moment(this.props.date).format('MM/DD/YYYY')
    return <div className='Card'>
      <div className='Card-image'>
        <NavLink to={`/overlay/movie/${this.props.id}`}><img src={this.props.image} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/movie/${this.props.id}`}><p>{this.props.title}</p></NavLink>
        <p>({newDate})</p>
      </div>
    </div>
  }
}

export default Card
