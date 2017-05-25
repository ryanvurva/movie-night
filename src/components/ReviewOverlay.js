import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import Buttons from './Buttons'
import LikeButtons from './LikeButtons'

import auth from './utils/auth'
import { get } from './utils/api'

// import pic from '../images/movies/Logan.jpg'

@observer
class ReviewOverlay extends Component {
  state = {
    thisMovie: []
  }
  _goBack () {
    window.history.back()
  }
  componentDidMount () {
    get(`/movie/${this.props.match.params.id}`).then((data) => {
      this.setState({ thisMovie: data })
    })
  }
  render () {
    const review = this.state.thisMovie
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${review.poster_path}`} />
      </div>
      <div className='overlayRight'>
        <div className='overlayHeader'>
          <div className='Title'>
            <div>
              <h2>{review.title}</h2>
            </div>
          </div>
          <div className='userPopularity'>
            <NavLink to='/reviews/:movie'>58 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div>
        </div>
        <div className='aboutThis'>
          <form>
            <textarea placeholder='What is YOUR opinion?' />
          </form>
        </div>
        <div className='exitOverlay'>
          <button><i className='fa fa-sign-in' aria-hidden='true' /> submit</button>
          <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
        </div>
      </div>
    </div>
  }
}

export default ReviewOverlay
