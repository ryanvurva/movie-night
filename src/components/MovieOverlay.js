import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import auth from './utils/auth'
import { get } from './utils/api'
import { mutation } from './utils/graphql'

@observer
class MovieOverlay extends Component {
  state = {
    thisMovie: '',
    vault: [],
    watchlist: []
  }
  componentDidMount () {
    get(`/movie/${this.props.match.params.id}`).then((data) => {
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
      })
  }
  addToVault (newVault) {
    mutation(`
      updateProfileMN(id: "${auth.cmsProfileId}" vault: ${JSON.stringify(newVault)}) {
        vault
      }
    `).then((response) => {
      console.log('added', response)
    })
  }
  addToWatchlist (newWatchList) {
    mutation(`
      updateProfileMN(id: "${auth.cmsProfileId}" watchlist: ${JSON.stringify(newWatchList)}) {
        watchlist
      }
    `).then((response) => {
      console.log('added', response)
    })
  }
  _vault = (event) => {
    event.preventDefault()
    const { vault } = this.state
    const newItem = `movie:${this.props.match.params.id}`
    if (!vault.includes(newItem)) {
      const newVault = [...vault, newItem]
      this.addToVault([...vault, newItem])
      this.setState({ vault: newVault })
    }
  }
  _watch = (event) => {
    event.preventDefault()
    const { watchlist } = this.state
    const newItem = `movie:${this.props.match.params.id}`
    if (!watchlist.includes(newItem)) {
      const newWatchList = [...watchlist, newItem]
      this.addToWatchlist([...watchlist, newItem])
      this.setState({ watchlist: newWatchList })
    }
  }
  _goBack () {
    window.history.back()
  }

  render () {
    const movie = this.state.thisMovie
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
        <div className='userFeatures'>
          {auth.isSignedIn ? <div className='Buttons'>
            <button onClick={this._vault} title='add to your vault' disabled={this.state.vault.includes(`movie:${movie.id}`)}><i className='fa fa-plus' aria-hidden='true' /></button>
            <button onClick={this._watch} title='add to your watchlist' disabled={this.state.watchlist.includes(`movie:${movie.id}`)}><i className='fa fa-eye' aria-hidden='true' /></button>
            <NavLink to={`/overlay/review/movie/${movie.id}`} title='write your own review'><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
          </div> : null}
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
