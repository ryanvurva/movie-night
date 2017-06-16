import React, { Component } from 'react'
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
          <p>{this.props.contentType}: '{this.state.title}':</p>
          {/* <p>3 <i className='fa fa-comments-o' aria-hidden='true' /></p> */}
        </div>
        <div className='Opinion'>
          <p>{this.props.review}</p>
        </div>
      </div>
    </div>
  }
}

export default ReviewCard
