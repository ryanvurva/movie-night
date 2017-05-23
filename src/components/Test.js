import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import { get } from './utils/api'
// import store from './utils/store'

import Card3 from './Card'
// import Card2 from './Card2'

@observer
class Home extends Component {
  state = {
    movies: []
    // tv: []
  }

  componentWillMount () {
    get('/movie/popular').then((data) => {
      console.log(data.results)
      this.setState({ movies: data.results })
    })
  }

  componentDidMount () {
    get('/movie/popular').then((data) => {
      // console.log(data)
      this.setState({ movies: data.results })
    })
  }

  // componentWillUpdate () {
  //   get('/movie/popular').then((data) => {
  //     console.log(data)
  //     this.setState({ movies: data })
  //   })
  // }
  render () {
    // api.get('/movie/popular').then((data) => {
    //   console.log(data)
    //   this.setState({ movies: data.results })
    // })

    const { movies } = this.state
    const movieCards = movies.map((movieItem, i) => {
      return <Card3
        image={movieItem.backdrop_path}
        title={movieItem.title}
        date={movieItem.release_date}
        position={i}
        key={i}
      />
    })
    // const { tv } = this.state
    // const tvCards = tv.map((tvItem, i) => {
    //   return <Card2
    //     image={tvItem.image}
    //     title={tvItem.title}
    //     date={tvItem.date}
    //     position={i}
    //     key={i}
    //   />
    // })
    return <div className='Home'>
      <section>
        <div className='Home-title'>
          <h2>Popular Movies</h2>
          <NavLink to='/movies/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {movieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {/* {tvCards} */}
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
