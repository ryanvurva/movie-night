import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

class ProfileCard extends Component {
  render () {
    let date = moment(this.props.createdAt).format('MM/DD/YYYY')
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
            <p>Member since: {date}</p>
            <hr />
            <p>Vault: {this.props.vault.length}</p>
            <p>Watchlist: {this.props.watchlist.length}</p>
            <p>Reviews: {this.props.reviewRef.length}</p>
          </div>
        </div>
      </div>
    </NavLink>
  }
}

export default ProfileCard
