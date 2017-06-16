import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import auth from './utils/auth'

class Buttons extends Component {
  state = {
    authID: '',
    id: '',
    fullName: '',
    picture: '',
    kudos: '',
    vault: [],
    watchlist: [],
    reviews: []
  }

  componentDidMount () {
    window.fetch('https://api.graphcms.com/simple/v1/movienight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          ProfileMN(id: "${auth.cmsProfileId}") {
            id
            authID
            vault
            watchlist
            kudos
            picture
            fullName
            reviewRef {
              contentType
              contentId
              review
            }
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
  render () {
    return <div className='Buttons'>
      <button onClick={this._vault}><i className='fa fa-university' aria-hidden='true' /></button>
      <button onClick={this._watch}><i className='fa fa-eye' aria-hidden='true' /></button>
      <NavLink to={`/overlay/review/movie/${this.props.id}`}><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
    </div>
  }
}

export default Buttons
