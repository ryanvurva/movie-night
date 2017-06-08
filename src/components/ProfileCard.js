import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import moment from 'moment'

// import Pic from '../images/Ryan-3.jpg'

class ProfileCard extends Component {
  // constructor(props) {
  //   super(props)
  //   const vaulted = {this.props}
  // }
  // state = {
  //   vault: [],
  //   watchlist: [],
  //   reviews: []
  // }
  // componentDidMount () {
  //   this.updateState()
  // }
  // updateState () {
  //   const vault = {this.props.vault}
  // }
  render () {
    return <NavLink to={`/user/${this.props.id}`}>
      <div className='profileCard'>
        <div className='image'>
          <img src={this.props.picture} />
        </div>
        <div className='info'>
          <div>
            <h2>{this.props.fullName}</h2>
            <p><i className='fa fa-thumbs-o-up' aria-hidden='true' /> {this.props.kudos}</p>
          </div>
          <p>member since: {this.props.createdAt}</p>
          {/* <hr /> */}
          {/* <p>vault: {this.props.vault.prototype.length}</p> */}
          {/* <p>watchlist: 3</p> */}
          {/* <p>reviews: 4</p> */}
        </div>
      </div>
    </NavLink>
  }
}

export default ProfileCard
