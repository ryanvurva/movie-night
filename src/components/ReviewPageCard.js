import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

// import { get } from './utils/api'
// import auth from './utils/auth'

class ReviewCard extends Component {
  state = {
    title: ''
  }

  componentDidMount () {
    this.updateContent()
  }

  updateContent () {
    // get(`/${this.props.contentType}/${this.props.contentId}`).then((data) => {
    //   if (this.props.contentType === 'movie') {
    //     this.setState({ title: data.title })
    //   } else {
    //     this.setState({ title: data.name })
    //   }
    // })
  }

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
