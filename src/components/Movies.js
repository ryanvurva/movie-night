import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

// import auth from './utils/auth.js'
// import ui from '../ui'
import { get } from './utils/api'

import Card from './Card'
// import Buttons from './Buttons'

@observer
class Movies extends Component {
  state = {
    popularMovies: [],
    genres: [],
    action: [],
    animation: [],
    comedy: [],
    family: [],
    scienceFiction: [],
    horror: [],
    documentary: []
  }
  componentDidMount () {
    get('/movie/popular').then((data) => {
      this.setState({ popularMovies: data.results })
    })
    get('/genre/movie/list').then((data) => {
      this.setState({ genres: data.genres })
    })
    get('/genre/28/movies').then((data) => {
      this.setState({ action: data.results })
    })
    get('/genre/16/movies').then((data) => {
      this.setState({ animation: data.results })
    })
    get('/genre/35/movies').then((data) => {
      // console.log(data.results)
      this.setState({ comedy: data.results })
    })
    get('/genre/10751/movies').then((data) => {
      // console.log(data.results)
      this.setState({ family: data.results })
    })
    get('/genre/878/movies').then((data) => {
      // console.log(data.results)
      this.setState({ scienceFiction: data.results })
    })
    get('/genre/27/movies').then((data) => {
      // console.log(data.results)
      this.setState({ horror: data.results })
    })
    get('/genre/99/movies').then((data) => {
      // console.log(data.results)
      this.setState({ documentary: data.results })
    })
  }
  render () {
    const { popularMovies } = this.state
    const popularMovieCards = popularMovies.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    }).reverse()
    const { action } = this.state
    const actionMovies = action.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { animation } = this.state
    const animatedMovies = animation.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { comedy } = this.state
    const comedyMovies = comedy.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { family } = this.state
    const familyMovies = family.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { scienceFiction } = this.state
    const scienceMovies = scienceFiction.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { horror } = this.state
    const horrorMovies = horror.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    const { documentary } = this.state
    const docMovies = documentary.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        position={i}
        key={i}
      />
    })
    return <div className='Movies'>
      <section>
        <div className='Movies-title'>
          <h2>Featured Movies</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {popularMovieCards}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Action</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {actionMovies}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Animated</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {animatedMovies}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Comedies</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {comedyMovies}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Family</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {familyMovies}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Science Fiction</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {scienceMovies}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Horror</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {horrorMovies}
        </div>
      </section>
      <section>
        <div className='Movies-title'>
          <h2>Documentaries</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {docMovies}
        </div>
      </section>
    </div>
  }
}

export default Movies
