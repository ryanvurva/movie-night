import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import gravatar from 'gravatar'

import auth from './utils/auth'
import { get } from './utils/api'
// import store from './utils/store.js'

import LikeButtons from './LikeButtons'
import Card from './Card'
import Card2 from './Card2'

import defaultPic from '../images/default.jpg'

class Profile extends Component {
  state = {
    movies: [],
    tv: []
  }
  componentDidMount () {
    get('/movie/popular').then((data) => {
      console.log(data.results)
      this.setState({ movies: data.results })
    })
    get('/tv/popular').then((data) => {
      console.log(data.results)
      this.setState({ tv: data.results })
    })
  }
  render () {
    const { movies } = this.state
    const movieCards = movies.map((movieItem, i) => {
      if (movieItem.poster_path === null || movieItem.poster_path === undefined) {
        movieItem.poster_path = defaultPic
      } else {
        movieItem.poster_path = 'http://image.tmdb.org/t/p/w342' + movieItem.poster_path
      }
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        position={i}
        key={i}
      />
    })
    const { tv } = this.state
    const tvCards = tv.map((tvItem, i) => {
      return <Card2
        image={tvItem.poster_path}
        title={tvItem.name}
        date={tvItem.first_air_date}
        position={i}
        key={i}
      />
    })
    return <div className='Profile'>
      <div className='profileHeader'>
        <div className='profilePic'>
          <img src={auth.profile.picture_large} alt='user profile image' width='100%' height='100%' />
          {/* <img src={gravatar.url('ryanvurva@gmail.com')} alt='user profile image' width='100%' height='100%' /> */}
        </div>
        <div className='profileInfo'>
          <div className='userName'>
            <h1>{auth.profile.name}</h1>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div>
          <div>
            <p>Reviews: 43</p>
            <p>Vault: 708</p>
            <p>Watch-List: 22</p>
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
            {movieCards}
          </div>
        </section>
        <section>
          <div className='Home-title'>
            <h2>Watch List</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            {tvCards}
          </div>
        </section>
        <section>
          <div className='Home-title'>
            <h2>Ryan Vurva's Reviews</h2>
            {/* <NavLink to='#'>...see all</NavLink> */}
          </div>
          <div className='Home-content'>
            <div className='reviewCard'>
              <div className='review-section'>
                <div className='Critic'>
                  <NavLink to='/:name'>Ryan Vurva's</NavLink> opinion about 'Latin Words':
                </div>
                <div className='Opinion'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className='reviewCard'>
              <div className='review-section'>
                <div className='Critic'>
                  <NavLink to='/:name'>Ryan Vurva's</NavLink> opinion about 'Latin Words':
                </div>
                <div className='Opinion'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className='reviewCard'>
              <div className='review-section'>
                <div className='Critic'>
                  <NavLink to='/:name'>Ryan Vurva's</NavLink> opinion about 'Latin Words':
                </div>
                <div className='Opinion'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  }
}

export default Profile
