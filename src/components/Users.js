import React, { Component } from 'react'

import ProfileCard from './ProfileCard'

class Users extends Component {
  state = {
    users: []
  }
  componentDidMount () {
    window.fetch('https://api.graphcms.com/simple/v1/movienight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          allProfileMNs {
            id
            fullName
            kudos
            createdAt
            picture
            vault
            watchlist
            reviewRef {
              contentName
            }
          }
        }`
      })
    }).then(res => res.json())
      .then(({ data }) => {
        this.setState({
          users: data.allProfileMNs || []
        })
      })
  }
  render () {
    return <div className='Users'>
      {this.state.users.map((user, i) => {
        return <ProfileCard key={i} {...user} />
      })}
    </div>
  }
}

export default Users
