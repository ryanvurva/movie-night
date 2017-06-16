import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import auth from './utils/auth'
import { get } from './utils/api'
import { mutation } from './utils/graphql'

@observer
class ReviewOverlay extends Component {
  state = {
    thisShow: []
  }
  _goBack () {
    window.history.back()
  }
  componentDidMount () {
    get(`/tv/${this.props.match.params.id}`).then((data) => {
      this.setState({ thisShow: data })
    })
  }
  submitReview () {
    mutation(`createReviewsMN(
    profileRefId: "${auth.cmsProfileId}"
    contentId: ${this.state.thisShow.id}
    contentName: "${this.state.thisShow.name}"
    contentType: "tv"
    review: "${this.refs.review.value}"
    isPublished: true) {
    review
  }`).then((response) => {
    console.log('added', response)
  })
  }
  _submit = (event) => {
    event.preventDefault()
    this.submitReview()
    this._goBack()
  }
  render () {
    const review = this.state.thisShow
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${review.poster_path}`} />
      </div>
      <div className='overlayRight'>
        <div className='overlayHeader'>
          <div className='Title'>
            <div>
              <h2>{review.name}</h2>
            </div>
          </div>
        </div>
        <div className='aboutThis'>
          <form>
            <textarea placeholder='What is YOUR opinion?' ref='review' />
            <div className='exitOverlay'>
              <button onClick={this._submit}><i className='fa fa-sign-in' aria-hidden='true' /> submit</button>
              <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  }
}

export default ReviewOverlay
