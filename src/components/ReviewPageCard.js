import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

class ReviewCard extends Component {
  render () {
    let composedOn = moment(this.props.createdAt).fromNow()

    return <div className='reviewCard'>
      <div className='review-section'>
        <div className='Critic'>
          <div className='whoWhatWhen'><NavLink to={`/user/${this.props.profileRef.id}`}>{this.props.profileRef.fullName}'s</NavLink> opinion about '<span>{this.props.contentName}</span>' from {composedOn}:</div>
          {/* <div className='approvals'>...</div> */}
        </div>
        <div className='Opinion'>
          <p>{this.props.review}</p>
        </div>
      </div>
    </div>
  }
}

export default ReviewCard
