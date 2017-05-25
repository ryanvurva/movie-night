import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './Buttons'
import LikeButtons from './LikeButtons'

import auth from './utils/auth'
import { get } from './utils/api'

// import pic from '../images/movies/rogue-one.jpg'

@observer
class MovieOverlay extends Component {
  state = {
    thisMovie: []
  }
  _goBack () {
    window.history.back()
  }

  componentDidMount () {
    get(`/movie/${this.props.match.params.id}`).then((data) => {
      // console.log(data)
      this.setState({ thisMovie: data })
    })
    // console.log(`do a fetch to /movies/${this.props.match.params.id}`)
  }

  render () {
    const movie = this.state.thisMovie
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
        <div className='userFeatures'>
          {auth.isSignedIn ? <Buttons id={movie.id} /> : null}
        </div>
      </div>
      <div className='overlayRight'>
        <div className='overlayHeader'>
          <div className='Title'>
            <div>
              <h2>{movie.title}</h2>
            </div>
            <p>({movie.release_date})</p>
          </div>
          <div className='userPopularity'>
            <NavLink to='/reviews/:movie'>73 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div>
        </div>
        <div className='aboutThis'>
          <p>{movie.overview}</p>
        </div>
        <div className='exitOverlay'>
          <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
        </div>
      </div>
    </div>
  }
}

export default MovieOverlay
