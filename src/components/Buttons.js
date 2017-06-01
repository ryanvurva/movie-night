import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import auth from './utils/auth'
// import { mutation } from './utils/graphql'

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
    // const id = this.props.match.params.id
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
  // addToVault () {
    // mutation(`mutation {
    //   updateProfileMN(id: "cj3c05x1wb5rk0146mrjyrknv" vault: ["movie:11", "tv:60625", "movie:118340"]) {
    //     vault
    //   }
    // }`)
  // }
  // addToWatchlist () {
    // mutation(``)
  // }
  // _vault = (event) => {
  //   event.preventDefault()
  // }
  // _watch = (event) => {
  //   event.preventDefault()
  // }
  render () {
    return <div className='Buttons'>
      <button onClick={this._vault}><i className='fa fa-university' aria-hidden='true' /></button>
      <button onClick={this._watch}><i className='fa fa-eye' aria-hidden='true' /></button>
      <NavLink to={`/overlay/review/movie/${this.props.id}`}><i className='fa fa-pencil-square-o' aria-hidden='true' /></NavLink>
    </div>
  }
}

export default Buttons
