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
        <NavLink to={`/overlay/tv/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342${this.props.image}`} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/tv/${this.props.id}`}><p>{this.props.title}</p></NavLink>
        <p>({newDate})</p>
      </div>
    </div>
  }
}

export default Card
