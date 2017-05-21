import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import Buttons from './Buttons'

// import auth from './utils/auth'

@observer
class Card extends Component {
  render () {
    return <div className='Card'>
      <div className='Card-image'>
        <NavLink to={`/overlay/movie/${this.props.title}`}><img src={this.props.image} alt='' width='100%' /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/movie/${this.props.title}`}><p>{this.props.title}</p></NavLink>
        <p>({this.props.date})</p>
        {/* {auth.isSignedIn ? <Buttons image={this.props.image} title={this.props.title} /> : null} */}
      </div>
    </div>
  }
}

export default Card
