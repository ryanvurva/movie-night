import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import defaultPic from '../images/default.jpg'

import { get } from './utils/api'

class Search extends Component {
  state = {
    query: null,
    entries: [],
    type: []
  }

  componentDidMount () {
    const query = this.props.match.params.query
    if (query !== this.state.query) {
      get('/search/multi', query).then((data) => {
        console.log(data.results)
        this.setState({ entries: data.results })
      })
    }
  }

  render () {
    const { entries } = this.state
    const results = entries.map((movieItem, i) => {
      if (movieItem.title === null || movieItem.title === undefined) {
        movieItem.title = movieItem.name
      }
      if (movieItem.release_date === null || movieItem.release_date === undefined) {
        movieItem.release_date = movieItem.first_air_date
      }
      if (movieItem.poster_path === null || movieItem.poster_path === undefined) {
        movieItem.poster_path = defaultPic
      } else {
        movieItem.poster_path = 'http://image.tmdb.org/t/p/w342' + movieItem.poster_path
      }
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        id={movieItem.id}
        type={movieItem.media_type}
        position={i}
        key={i}
      />
    })
    return <div className='Search'>
      <section>
        <div className='Movies-title'>
          <h2>Searching for "{this.props.match.params.query}"</h2>
          {/* <NavLink to='/movies/featured'>...see all</NavLink> */}
        </div>
        <div className='Movies-content'>
          {results}
        </div>
      </section>
    </div>
  }
}

class Card extends Component {
  render () {
    return <div className='Card'>
      <div className='Card-image'>
        <NavLink to={`/overlay/${this.props.type}/${this.props.id}`}><img src={this.props.image} /></NavLink>
      </div>
      <div className='Card-info'>
        <NavLink to={`/overlay/${this.props.type}/${this.props.id}`}><p>{this.props.title}</p></NavLink>
        <p>({this.props.date})</p>
      </div>
    </div>
  }
}

export default Search
