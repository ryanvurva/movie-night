import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
// import gravatar from 'gravatar'

import auth from './utils/auth'
import { get } from './utils/api'
// import store from './utils/store.js'

import defaultImage from '../images/default.jpg'

import LikeButtons from './LikeButtons'
import ReviewCard from './ReviewCard'
// import Card from './Card3'
// import Card2 from './Card2'

@observer
class Profile extends Component {
  state = {
    fullName: '',
    picture: '',
    kudos: [],
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
            }
          }
        }`
      })
    }).then(res => res.json())
      .then(({ data }) => {
        console.log(data)
        this.setState({
          fullName: data.ProfileMN.fullName,
          picture: data.ProfileMN.picture,
          user: data.ProfileMN.id,
          vault: data.ProfileMN.vault || [],
          watchlist: data.ProfileMN.watchlist || [],
          kudos: data.ProfileMN.kudos,
          reviews: data.ProfileMN.reviewRef
        })
        console.log(this.state.vault)
        console.log(this.state.watchlist)
        console.log(this.state.kudos)
        console.log(this.state.reviews)
        console.log(auth.profile)
      })
  }

  render () {
    // const { tv } = this.state
    // const tvCards = tv.map((tvItem, i) => {
    //   return <Card2
    //     image={tvItem.poster_path}
    //     title={tvItem.name}
    //     date={tvItem.first_air_date}
    //     position={i}
    //     key={i}
    //   />
    // })
    // const { reviews } = this.state
    return <div className='Profile'>
      <div className='profileHeader'>
        <div className='profilePic'>
          <img src={this.state.picture} alt='user profile image' width='100%' height='100%' />
          {/* <img src={gravatar.url('ryanvurva@gmail.com')} alt='user profile image' width='100%' height='100%' /> */}
        </div>
        <div className='profileInfo'>
          <div className='userName'>
            <h1>{this.state.fullName}</h1>
            {auth.isSignedIn ? <LikeButtons kudos={this.state.kudos} /> : null}
          </div>
          <div>
            <p>Reviews: {this.state.reviews.length}</p>
            <p>Vault: {this.state.vault.length}</p>
            <p>Watch-List: {this.watchlist.length}</p>
          </div>
        </div>
      </div>
      <div className='profileContent'>
        <section>
          <div className='Home-title'>
            <h2>Vault</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {this.state.movies.map((content) => {
              const [type, id] = content.split(':')
              return <VaultCard type={type} id={id} key={content} />
            })}
          </div>
        </section>
        <section>
          <div className='Home-title'>
            <h2>Watch List</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {/* {tvCards} */}
          </div>
        </section>
        <section>
          <div className='Home-title'>
            <h2>{this.state.fullName}'s Reviews</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {this.state.reviews.map((review, i) => {
              return <ReviewCard key={i} {...review} />
            })}
          </div>
        </section>
      </div>
    </div>
  }
}

class VaultCard extends Component {
  state = {
    image: defaultImage,
    title: '...',
    date: '...'
  }

  componentDidMount () {
    get(`/${this.props.type}/${this.props.id}`).then((data) => {
      console.log(data.title)
      const image = data.poster_path ? `https://image.tmdb.org/t/p/w342${data.poster_path}` : defaultImage
      if (this.props.type === 'movie') {
        this.setState({
          image,
          title: data.title || 'wtf',
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
