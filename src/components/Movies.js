import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
// import auth from './utils/auth.js'
// import ui from '../ui'

import Card from './Card'
// import Buttons from './Buttons'

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

@observer
class Movies extends Component {
  state = {
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
    const cards2 = movies.map(({image, title, date}, i) => {
      return <Card
        image={image}
        title={title}
        date={date}
        position={i}
        key={i}
      />
    }).reverse()
    return <div className='Movies'>
      <section>
        <div className='Home-title'>
          <h2>Featured Movies</h2>
          <NavLink to='/movies/featured'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {cards}
        </div>
      </section>
      <section>
        <div className='Home-title'>
          <h2>Popular Movies</h2>
          <NavLink to='/movies/popular'>...see all</NavLink>
        </div>
        <div className='Home-content'>
          {cards2}
        </div>
      </section>
    </div>
  }
}

export default Movies
