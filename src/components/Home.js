import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import * as api from './utils/api'
// import store from './utils/store'

import Card from './Card'
import Card2 from './Card2'

// import fifthElement from '../images/movies/fifth-element.jpg'
// import boondockSaints from '../images/movies/boondock-saints.jpg'
// import Anchorman from '../images/movies/anchorman.jpg'
// import rogueOne from '../images/movies/rogue-one.jpg'
// import fightClub from '../images/movies/fight-club.jpg'
// import findingNemo from '../images/movies/finding-nemo.jpg'
// import forrestGump from '../images/movies/forrest-gump.jpg'
// import ID4 from '../images/movies/id4.jpg'
// import ironMan from '../images/movies/iron-man.jpg'
// import jurassicPark from '../images/movies/jurassic-park.jpg'
// import Logan from '../images/movies/Logan.jpg'
// import pulpFiction from '../images/movies/pulp-fiction.jpg'
// import Shawshank from '../images/movies/shawshank.jpg'
// import toyStory from '../images/movies/toy-story.jpg'
// import Twister from '../images/movies/twister.jpg'
//
// import Thrones from '../images/tv/game-of-thrones.jpg'
// import houseCards from '../images/tv/house-cards.gif'
// import dareDevil from '../images/tv/daredevil.png'
// import Saul from '../images/tv/better-call-saul.jpg'
// import Avatar from '../images/tv/avatar.jpg'
// import designatedSurvivor from '../images/tv/designated-survivor.jpg'
// import Entourage from '../images/tv/entourage.jpeg'
// import jessicaJones from '../images/tv/jessica-jones.jpg'
// import lifeInPieces from '../images/tv/life-in-pieces.jpg'
// import masterOfNone from '../images/tv/master.jpg'
// import modernFamily from '../images/tv/modern-family.jpg'
// import newsRoom from '../images/tv/newsroom.jpg'
// import rickMorty from '../images/tv/rick-morty.jpg'
// import siliconValley from '../images/tv/silicon-valley.jpg'
// import walkingDead from '../images/tv/walking-dead.jpg'

@observer
class Home extends Component {
  state = {
    movies: [],
    tv: [
    // {image: Thrones, title: 'Game of Thrones', date: '1997'},
    // {image: houseCards, title: 'House of Cards', date: '1999'},
    // {image: dareDevil, title: 'Daredevil', date: '2004'},
    // {image: Saul, title: 'Better Call Saul', date: '2016'},
    // {image: Avatar, title: 'Avatar: the Last Airbender', date: '1999'},
    // {image: designatedSurvivor, title: 'Designated Survivor', date: '2003'},
    // {image: Entourage, title: 'Entourage', date: '1994'},
    // {image: jessicaJones, title: 'Jessica Jones', date: '1996'},
    // {image: lifeInPieces, title: 'Life in Pieces', date: '2008'},
    // {image: masterOfNone, title: 'Master of None', date: '1993'},
    // {image: modernFamily, title: 'Modrern Family', date: '2017'},
    // {image: newsRoom, title: 'The Newsroom', date: '1994'},
    // {image: rickMorty, title: 'Rick and Morty', date: '1994'},
    // {image: siliconValley, title: 'Silicon Valley', date: '1995'},
    // {image: walkingDead, title: 'The Walking Dead', date: '1996'}
    ]
  }

  componentDidMount () {
    api.get('/movie/popular').then((data) => {
      console.log(data)
      this.setState({ movies: data })
    })
  }
  render () {
    // console.log(this.state.movies)
    const movies = this.state.movies
    const movieCards = movies.results.map((movieItem, i) => {
      return <Card
        image={movieItem.poster_path}
        title={movieItem.title}
        date={movieItem.release_date}
        position={i}
        key={i}
      />
    })
    const { tv } = this.state
    const tvCards = tv.map(({image, title, date}, i) => {
      return <Card2
        image={image}
        title={title}
        date={date}
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
          {movieCards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {tvCards}
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
