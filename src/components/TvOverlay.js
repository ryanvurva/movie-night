import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import LikeButtons from './LikeButtons'

import auth from './utils/auth'
import { get } from './utils/api'
import { mutation } from './utils/graphql'

@observer
class TvOverlay extends Component {
  state = {
    thisShow: [],
    vault: [],
    watchlist: []
  }
  _goBack () {
    window.history.back()
  }
  componentDidMount () {
    get(`/tv/${this.props.match.params.id}`).then((data) => {
      this.setState({ thisShow: data })
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
    const newItem = `tv:${this.props.match.params.id}`
    if (!vault.includes(newItem)) {
      const newVault = [...vault, newItem]
      this.addToVault([...vault, newItem])
      this.setState({ vault: newVault })
    }
  }
  _watch = (event) => {
    event.preventDefault()
    const { watchlist } = this.state
    const newItem = `tv:${this.props.match.params.id}`
    if (!watchlist.includes(newItem)) {
      const newWatchList = [...watchlist, newItem]
      this.addToWatchList([...watchlist, newItem])
      this.setState({ watchlist: newWatchList })
    }
  }
  render () {
    const show = this.state.thisShow
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${show.poster_path}`} />
        <div className='userFeatures'>
          {auth.isSignedIn ? <div className='Buttons'>
            <button onClick={this._vault} title='add to your vault' disabled={this.state.vault.includes(`tv:${show.id}`)}><i className='fa fa-university' aria-hidden='true' /></button>
            <button onClick={this._watch} title='add to your watchlist' disabled={this.state.watchlist.includes(`tv:${show.id}`)}><i className='fa fa-eye' aria-hidden='true' /></button>
            <NavLink to={`/overlay/review/tv/${show.id}`} title='write your own review'><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
          </div> : null}
        </div>
      </div>
      <div className='overlayRight'>
        <div className='overlayHeader'>
          <div className='Title'>
            <h2>{show.name}</h2>
            <p>({show.first_air_date})</p>
          </div>
          {/* <div className='userPopularity'>
            <NavLink to='/reviews/:show'>12 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div> */}
        </div>
        <div className='aboutThis'>
          <p>{show.overview}</p>
        </div>
        <div className='exitOverlay'>
          <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
        </div>
      </div>
    </div>
  }
}

export default TvOverlay
