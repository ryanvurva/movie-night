import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Card from './Card'
import Buttons from './Buttons'

import auth from './utils/auth'

import fifthElement from '../images/movies/fifth-element.jpg'
import boondockSaints from '../images/movies/boondock-saints.jpg'
import Anchorman from '../images/movies/anchorman.jpg'
import rogueOne from '../images/movies/rogue-one.jpg'
import fightClub from '../images/movies/fight-club.jpg'
import findingNemo from '../images/movies/finding-nemo.jpg'
import forrestGump from '../images/movies/forrest-gump.jpg'
import ID4 from '../images/movies/id4.jpg'
import ironMan from '../images/movies/iron-man.jpg'
import jurassicPark from '../images/movies/jurassic-park.jpg'
import Logan from '../images/movies/Logan.jpg'
import pulpFiction from '../images/movies/pulp-fiction.jpg'
import Shawshank from '../images/movies/shawshank.jpg'
import toyStory from '../images/movies/toy-story.jpg'
import Twister from '../images/movies/twister.jpg'
import Saul from '../images/tv/better-call-saul.jpg'
import Thrones from '../images/tv/game-of-thrones.jpg'
import houseCards from '../images/tv/house-cards.gif'
import rickMorty from '../images/tv/rick-morty.jpg'

@observer
class Home extends Component {
  state = {
    // images: [fifthElement, boondockSaints, Anchorman, rogueOne, fightClub, findingNemo, forrestGump, ID4, ironMan, jurassicPark, Logan, pulpFiction, Shawshank, toyStory, Twister],
    // titles: ['The Fifth Element', 'The Boondock Saints', 'Anchorman The Legend of Ron Burgundy', 'Rogue One, A Star Wars Story', 'Fight Club', 'Finding Nemo', 'Forrest Gump', 'Independence Day', 'Iron Man', 'Jurassic Park', 'Logan', 'Pulp Fiction', 'The Shawshank Redemption', 'Toy Story', 'Twister'],
    // dates: ['1997', '1999', '2004', '2016', '1999', '2003', '1994', '1996', '2008', '1993', '2017', '1994', '1994', '1995', '1996'],
    movies: [
    {image: fifthElement, title: 'The Fifth Element', date: '1997'},
    {image: boondockSaints, title: 'The Boondock Saints', date: '1999'},
    {image: Anchorman, title: 'Anchorman The Legend of Ron Burgundy', date: '2004'},
    {image: rogueOne, title: 'Rogue One, A Star Wars Story', date: '2016'},
    {image: fightClub, title: 'Fight Club', date: '1999'},
    {image: findingNemo, title: 'Finding Nemo', date: '2003'},
    {image: forrestGump, title: 'Forrest Gump', date: '1994'},
    {image: ID4, title: 'Independence Day', date: '1996'},
    {image: ironMan, title: 'Iron Man', date: '2008'},
    {image: jurassicPark, title: 'Jurassic Park', date: '1993'},
    {image: Logan, title: 'Logan', date: '2017'},
    {image: pulpFiction, title: 'Pulp Fiction', date: '1994'},
    {image: Shawshank, title: 'The Shawshank Redemption', date: '1994'},
    {image: toyStory, title: 'Toy Story', date: '1995'},
    {image: Twister, title: 'Twister', date: '1996'}
    ]
  }
  render () {
    const { movies } = this.state
    const cards = movies.map(({image, title, date}, i) => {
      return <Card
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
          {cards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular TV Series</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/better-call-saul'><img src={Saul} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/better-call-saul'><p>Better Call Saul</p></NavLink>
              <p>(2016)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/game-of-thrones'><img src={Thrones} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/game-of-thrones'><p>Game of Thrones</p></NavLink>
              <p>(2011)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/house-of-cards'><img src={houseCards} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/house-of-cards'><p>House of Cards</p></NavLink>
              <p>(2013)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
          <div className='Card'>
            <div className='Home-image'>
              <NavLink to='/tv/rick-and-morty'><img src={rickMorty} alt='' width='100%' /></NavLink>
            </div>
            <div className='Home-info'>
              <NavLink to='/tv/rick-and-morty'><p>Rick & Morty</p></NavLink>
              <p>(2013)</p>
              {auth.isSignedIn ? <Buttons /> : null}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Recent Reviews</h2>
          <NavLink to='/reviews'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          <div className='Home-review-section'>
            <div className='Critic'>
              <NavLink to='/:name'>someGuy123's</NavLink> opinion about 'Some Movie':
            </div>
            <div className='Opinion'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Home
