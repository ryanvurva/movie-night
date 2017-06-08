import React, { Component } from 'react'

import ReviewCard from './ReviewPageCard'

class Reviews extends Component {
  state = {
    reviews: []
  }
  componentDidMount () {
    window.fetch('https://api.graphcms.com/simple/v1/movienight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          allReviewsMNs {
            createdAt
            contentName
            contentId
            review
            profileRef {
              id
              fullName
            }
          }
        }`
      })
    }).then(res => res.json())
      .then(({ data }) => {
        this.setState({
          reviews: data.allReviewsMNs || []
        })
      })
  }
  render () {
    return <div className='Reviews'>
      <h1>Recent Reviews</h1>
      <section>
        <div className='Review-content'>
          {this.state.reviews.map((review, i) => {
            return <ReviewCard key={i} {...review} />
          }).reverse()}
        </div>
      </section>
    </div>
  }
}

export default Reviews
