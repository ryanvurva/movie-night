import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import auth from './utils/auth'
import { get } from './utils/api'
import { mutation } from './utils/graphql'

import defaultImage from '../images/default.jpg'

// import LikeButtons from './LikeButtons'
import ReviewCard from './ReviewCard'

@observer
class Profile extends Component {
  state = {
    id: '',
    fullName: '',
    picture: '',
    kudos: '',
    vault: [],
    watchlist: [],
    reviews: []
  }

  componentDidMount () {
    const id = this.props.match.params.id
    window.fetch('https://api.graphcms.com/simple/v1/movienight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          ProfileMN(id: "${id}") {
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
              comment {
                userName
                comment
              }
            }
          }
        }`
      })
    }).then(res => res.json())
      .then(({ data }) => {
        this.setState({
          fullName: data.ProfileMN.fullName,
          picture: data.ProfileMN.picture,
          id: data.ProfileMN.id,
          kudos: data.ProfileMN.kudos,
          vault: data.ProfileMN.vault || [],
          watchlist: data.ProfileMN.watchlist || [],
          reviews: data.ProfileMN.reviewRef || []
        })
        // console.log(this.state.vault)
        // console.log(this.state.watchlist)
        // console.log(this.state.kudos)
        // console.log(this.state.reviews)
        // console.log(auth.profile)
      })
  }
  increaseKudos (plusOne) {
    mutation(`updateProfileMN(id: "${this.state.id}", kudos: ${plusOne}) {kudos}`).then(({ data }) => {
      console.log(data)
      this.setState({ kudos: data.updateProfileMN.kudos })
    })
  }
  _submit = (event) => {
    event.preventDefault()
    const plusOne = this.state.kudos + 1
    this.increaseKudos(plusOne)
  }

  render () {
    return <div className='Profile'>
      <div className='profileHeader'>
        <div className='profilePic'>
          <img src={this.state.picture} alt='user profile image' width='100%' height='100%' />
        </div>
        <div className='profileInfo'>
          <div className='userName'>
            <h1>{this.state.fullName}</h1>
            {auth.isSignedIn ? <div className='likes'>
              <button onClick={this._submit}><i className='fa fa-thumbs-o-up' aria-hidden='true' /> {this.state.kudos}</button>
            </div> : null}
            {/* {auth.isSignedIn ? <LikeButtons onClick={this._submit} kudos={this.state.kudos} /> : null} */}
          </div>
          <div>
            <p>Vault: {this.state.vault.length}</p>
            <p>Watch-List: {this.state.watchlist.length}</p>
            <p>Reviews: {this.state.reviews.length}</p>
          </div>
        </div>
      </div>
      <div className='profileContent'>
        <section>
          <div className='Home-title'>
            <h2>Vault ({this.state.vault.length})</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {this.state.vault.map((content) => {
              const [type, id] = content.split(':')
              return <ProfileCard type={type} id={id} key={content} />
            }).reverse()}
          </div>
        </section>
        <section>
          <div className='Home-title'>
            <h2>Watch List ({this.state.watchlist.length})</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {this.state.watchlist.map((content) => {
              const [type, id] = content.split(':')
              return <ProfileCard type={type} id={id} key={content} />
            }).reverse()}
          </div>
        </section>
        <section>
          <div className='Home-title'>
            <h2>{this.state.fullName}'s Reviews ({this.state.reviews.length})</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {this.state.reviews.map((review, i) => {
              return <ReviewCard key={i} {...review} name={this.state.fullName} />
            }).reverse()}
          </div>
        </section>
      </div>
    </div>
  }
}

class ProfileCard extends Component {
  state = {
    image: defaultImage,
    title: '...',
    date: '...'
  }

  componentDidMount () {
    get(`/${this.props.type}/${this.props.id}`).then((data) => {
      // console.log(data.title)
      const image = data.poster_path ? `https://image.tmdb.org/t/p/w342${data.poster_path}` : defaultImage
      if (this.props.type === 'movie') {
        this.setState({
          image,
          title: data.title,
          date: data.release_date
        })
      } else {
        this.setState({
          image,
          title: data.name,
          date: data.first_air_date
        })
      }
    })
  }

  render () {
    return <div className='Card'>
      <div className='Card-image'>
        <NavLink to={`/overlay/${this.props.type}/${this.props.id}`}><img src={this.state.image} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/${this.props.type}/${this.props.id}`}><p>{this.state.title}</p></NavLink>
        <p>({this.state.date})</p>
      </div>
    </div>
  }
}

export default Profile
