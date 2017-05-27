import React, { Component } from 'react'

import Card from './Card'
// import Card2 from './Card2'
// import EntryList from './EntryList'

import { get } from './utils/api'

class Search extends Component {
  state = {
    query: null,
    entries: []
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
  // }

  render () {
    const { entries } = this.state
    const results = entries.map((movieItem, i) => {
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
