import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import { get } from './utils/api'

import Card from './Card'
import Card2 from './Card2'
import ReviewCard from './ReviewPageCard'

import defaultPic from '../images/default.jpg'

@observer
class Home extends Component {
  state = {
    popularMovies: [],
    playingMovies: [],
    upcomingMovies: [],
    popularTv: [],
    topRatedTv: [],
    reviews: []
  }

  componentDidMount () {
    get('/movie/popular').then((data) => {
      this.setState({ popularMovies: data.results })
    })
    get('/movie/now_playing').then((data) => {
      this.setState({ playingMovies: data.results })
    })
    get('/movie/upcoming').then((data) => {
      this.setState({ upcomingMovies: data.results })
    })
    get('/tv/popular').then((data) => {
      this.setState({ popularTv: data.results })
    })
    get('/tv/top_rated').then((data) => {
      this.setState({ topRatedTv: data.results })
    })
    window.fetch('https://api.graphcms.com/simple/v1/movienight', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          allReviewsMNs {
            createdAt
            contentName
            contentId
            review
            profileRef {
              id
              fullName
            }
          }
        }`
      })
    }).then(res => res.json())
      .then(({ data }) => {
        this.setState({ reviews: data.allReviewsMNs || [] })
      })
  }
  render () {
    const { popularMovies } = this.state
    const popularMovieCards = popularMovies.map((movieItem, i) => {
      if (movieItem.poster_path === null || movieItem.poster_path === undefined) {
        movieItem.newPP = defaultPic
      } else {
        movieItem.newPP = 'http://image.tmdb.org/t/p/w342' + movieItem.poster_path
      }
      return <Card
        image={movieItem.newPP}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { playingMovies } = this.state
    const playingMovieCards = playingMovies.map((movieItem, i) => {
      if (movieItem.poster_path === null || movieItem.poster_path === undefined) {
        movieItem.newPP = defaultPic
      } else {
        movieItem.newPP = 'http://image.tmdb.org/t/p/w342' + movieItem.poster_path
      }
      return <Card
        image={movieItem.newPP}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { upcomingMovies } = this.state
    const upcomingMovieCards = upcomingMovies.map((movieItem, i) => {
      if (movieItem.poster_path === null || movieItem.poster_path === undefined) {
        movieItem.newPP = defaultPic
      } else {
        movieItem.newPP = 'http://image.tmdb.org/t/p/w342' + movieItem.poster_path
      }
      return <Card
        image={movieItem.newPP}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
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
        id={tvItem.id}
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
        id={tvItem.id}
        position={i}
        key={i}
      />
    })
    return <div className='Home'>
      <section>
        <div className='Home-title'>
          <h2>Popular Movies</h2>
          {/* <NavLink to='/movies/popular'>...see all</NavLink> */}
        </div>
        <div className='Home-content'>
          {popularMovieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>In Theaters</h2>
          {/* <NavLink to='/movies/latest'>...see all</NavLink> */}
        </div>
        <div className='Home-content'>
          {playingMovieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Coming Soon</h2>
          {/* <NavLink to='/movies/upcoming'>...see all</NavLink> */}
        </div>
        <div className='Home-content'>
          {upcomingMovieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          {/* <NavLink to='/tv/popular'>...see all</NavLink> */}
        </div>
        <div className='Home-content'>
          {popularTvCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Top Rated TV Series</h2>
          {/* <NavLink to='/tv/top-rated'>...see all</NavLink> */}
        </div>
        <div className='Home-content'>
          {topRatedTvCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Recent Reviews</h2>
          {/* <NavLink to='/reviews'>...see all</NavLink> */}
        </div>
        <div className='Home-content'>
          {this.state.reviews.map((review, i) => {
            return <ReviewCard key={i} {...review} />
          }).reverse()}
        </div>
      </section>
    </div>
  }
}

export default Home
