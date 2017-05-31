import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { get } from './utils/api'

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
          <NavLink to='/:name'>Ryan Vurva's</NavLink> opinion about '{this.state.title}':
        </div>
        <div className='Opinion'>
          <p>{this.props.review}</p>
        </div>
      </div>
    </div>
  }
}

export default ReviewCard
