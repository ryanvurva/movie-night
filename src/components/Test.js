import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import { get } from './utils/api'
// import store from './utils/store'

import Card from './Card'
import Card2 from './Card2'

@observer
class Home extends Component {
  state = {
    popularMovies: [],
    playingMovies: [],
    upcomingMovies: [],
    popularTv: [],
    topRatedTv: []
  }

  componentWillMount () {
    get('/movie/popular').then((data) => {
      // console.log(data.results)
      this.setState({ popularMovies: data.results })
    })
    get('/movie/now_playing').then((data) => {
      // console.log(data.results)
      this.setState({ playingMovies: data.results })
    })
    get('/movie/upcoming').then((data) => {
      // console.log(data.results)
      this.setState({ upcomingMovies: data.results })
    })
    get('/tv/popular').then((data) => {
      // console.log(data.results)
      this.setState({ popularTv: data.results })
    })
    get('/tv/top_rated').then((data) => {
      // console.log(data.results)
      this.setState({ topRatedTv: data.results })
    })
  }
  render () {
    const { popularMovies } = this.state
    const popularMovieCards = popularMovies.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        position={i}
        key={i}
      />
    })
    const { playingMovies } = this.state
    const playingMovieCards = playingMovies.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        position={i}
        key={i}
      />
    })
    const { upcomingMovies } = this.state
    const upcomingMovieCards = upcomingMovies.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        position={i}
        key={i}
      />
    })
    const { popularTv } = this.state
    const popularTvCards = popularTv.map((tvItem, i) => {
      return <Card2
        image={tvItem.poster_path}
        title={tvItem.name}
        date={tvItem.first_air_date}
        position={i}
        key={i}
      />
    })
    const { topRatedTv } = this.state
    const topRatedTvCards = topRatedTv.map((tvItem, i) => {
      return <Card2
        image={tvItem.poster_path}
        title={tvItem.name}
        date={tvItem.first_air_date}
        position={i}
        key={i}
      />
    })
    return <div className='Home'>
      <section>
        <div className='Home-title'>
          <h2>Popular Movies</h2>
          <NavLink to='/movies/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {popularMovieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>In Theaters</h2>
          <NavLink to='/movies/latest'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {playingMovieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Coming Soon</h2>
          <NavLink to='/movies/upcoming'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {upcomingMovieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {popularTvCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Top Rated TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {topRatedTvCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Recent Reviews</h2>
          <NavLink to='/reviews'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Home-review-card'>
            <div className='Home-review-section'>
              <div className='Critic'>
                <NavLink to='/user/:name'>someGuy123's</NavLink> opinion about 'Some Movie':
              </div>
              <div className='Opinion'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className='Home-review-card'>
            <div className='Home-review-section'>
              <div className='Critic'>
                <NavLink to='/user/:name'>someGuy123's</NavLink> opinion about 'Some Movie':
              </div>
              <div className='Opinion'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Home
