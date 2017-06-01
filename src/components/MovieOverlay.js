import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import Buttons from './Buttons'
// import LikeButtons from './LikeButtons'

import auth from './utils/auth'
import { get } from './utils/api'
import { query, mutation } from './utils/graphql'

// import pic from '../images/movies/rogue-one.jpg'

@observer
class MovieOverlay extends Component {
  state = {
    thisMovie: '',
    vault: [],
    watchlist: []
  }
  componentDidMount () {
    get(`/movie/${this.props.match.params.id}`).then((data) => {
      console.log(data)
      this.setState({ thisMovie: data })
    })
    window.fetch('https://api.graphcms.com/simple/v1/movienight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          ProfileMN(authID: "${auth.profile.user_id}") {
            vault
            watchlist
          }
        }`
      })
    }).then(res => res.json())
      .then(({ data }) => {
        this.setState({
          vault: data.ProfileMN.vault || [],
          watchlist: data.ProfileMN.watchlist || []
        })
        console.log(data)
        console.log(this.state.vault)
        console.log(this.state.watchlist)
      })
  }
  _goBack () {
    window.history.back()
  }
  addToVault (newVault) {
    mutation(`mutation {
      updateProfileMN(authID: "${auth.profile.user_id}" vault: "${newVault}") {
        vault
      }
    }`)
  }
  addToWatchlist () {
    // mutation(``)
  }
  _vault = (event) => {
    event.preventDefault()
    // const { vault } = this.state
    // const newVault = vault + 'movie:${this.props.match.params.id}'
    // this.setState({ vault: newVault })
    // addToVault(newVault)
  }
  _watch = (event) => {
    event.preventDefault()
  }

  render () {
    const movie = this.state.thisMovie
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
        <div className='userFeatures'>
          <div className='Buttons'>
            <button onClick={this._vault}><i className='fa fa-university' aria-hidden='true' /></button>
            <button onClick={this._watch}><i className='fa fa-eye' aria-hidden='true' /></button>
            <NavLink to={`/overlay/review/movie/${movie.id}`}><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
          </div>
          {/* {auth.isSignedIn ? <Buttons id={movie.id} /> : null} */}
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
          {/* <div className='userPopularity'>
            <NavLink to='/reviews/:movie'>73 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div> */}
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
