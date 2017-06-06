import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { get } from './utils/api'
import auth from './utils/auth'

class ReviewCard extends Component {
  state = {
    title: ''
  }

  componentDidMount () {
    this.updateContent()
  }

  updateContent () {
    get(`/${this.props.contentType}/${this.props.contentId}`).then((data) => {
      if (this.props.contentType === 'movie') {
        this.setState({ title: data.title })
      } else {
        this.setState({ title: data.name })
      }
    })
  }

  render () {
    return <div className='reviewCard'>
      <div className='review-section'>
        <div className='Critic'>
          <p>{auth.profile.name}'s opinion about: '{this.state.title}'</p>
          {/* <NavLink to='/user/:id'>{this.props.fullName}'s</NavLink> opinion about '{this.state.title}': */}
        </div>
        <div className='Opinion'>
          <p>{this.props.review}</p>
        </div>
      </div>
    </div>
  }
}

export default ReviewCard
