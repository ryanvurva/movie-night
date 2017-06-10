import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import moment from 'moment'

class ProfileCard extends Component {
  // state = {
  //   vault: [],
  //   watchlist: [],
  //   reviews: []
  // }
  componentDidMount () {
    // this.updateState()
    // console.log(this.props.reviewRef.length)
  }
  render () {
    return <NavLink to={`/user/${this.props.id}`}>
      <div className='profileCard'>
        <div className='image'>
          <img src={this.props.picture} />
        </div>
        <div className='info'>
          <div className='userName'>
            <h2>{this.props.fullName}</h2>
            <p><i className='fa fa-thumbs-o-up' aria-hidden='true' /> {this.props.kudos}</p>
          </div>
          <div className='userInfo'>
            <p>member since: {this.props.createdAt}</p>
            {/* <p>member since: {this.props.createdAt}</p> */}
            <hr />
            <p>vault: {this.props.vault.length}</p>
            <p>watchlist: {this.props.watchlist.length}</p>
            <p>reviews: {this.props.reviewRef.length}</p>
          </div>
        </div>
      </div>
    </NavLink>
  }
}

export default ProfileCard
