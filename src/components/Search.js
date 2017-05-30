import React, { Component } from 'react'

import Card from './Card'
// import Card2 from './Card2'
// import EntryList from './EntryList'

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

  // componentDidUpdate () {
  //   const query = this.props.match.params.query
  //   if (query !== this.state.query) {
  //     get('/search/multi', query).then((data) => {
  //       console.log(data.results)
  //       this.setState({ entries: data.results })
  //     })
  //   }
  //   this.doSearch()
  // }

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

export default Search
