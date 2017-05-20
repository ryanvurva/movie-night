import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
// import auth from './utils/auth.js'
// import ui from '../ui'

import Card2 from './Card2'
// import Buttons from './Buttons'

import Thrones from '../images/tv/game-of-thrones.jpg'
import houseCards from '../images/tv/house-cards.gif'
import dareDevil from '../images/tv/daredevil.png'
import Saul from '../images/tv/better-call-saul.jpg'
import Avatar from '../images/tv/avatar.jpg'
import designatedSurvivor from '../images/tv/designated-survivor.jpg'
import Entourage from '../images/tv/entourage.jpeg'
import jessicaJones from '../images/tv/jessica-jones.jpg'
import lifeInPieces from '../images/tv/life-in-pieces.jpg'
import masterOfNone from '../images/tv/master.jpg'
import modernFamily from '../images/tv/modern-family.jpg'
import newsRoom from '../images/tv/newsroom.jpg'
import rickMorty from '../images/tv/rick-morty.jpg'
import siliconValley from '../images/tv/silicon-valley.jpg'
import walkingDead from '../images/tv/walking-dead.jpg'

@observer
class TV extends Component {
  state = {
    tv: [
    {image: Thrones, title: 'Game of Thrones', date: '1997'},
    {image: houseCards, title: 'House of Cards', date: '1999'},
    {image: dareDevil, title: 'Daredevil', date: '2004'},
    {image: Saul, title: 'Better Call Saul', date: '2016'},
    {image: Avatar, title: 'Avatar: the Last Airbender', date: '1999'},
    {image: designatedSurvivor, title: 'Designated Survivor', date: '2003'},
    {image: Entourage, title: 'Entourage', date: '1994'},
    {image: jessicaJones, title: 'Jessica Jones', date: '1996'},
    {image: lifeInPieces, title: 'Life in Pieces', date: '2008'},
    {image: masterOfNone, title: 'Master of None', date: '1993'},
    {image: modernFamily, title: 'Modrern Family', date: '2017'},
    {image: newsRoom, title: 'The Newsroom', date: '1994'},
    {image: rickMorty, title: 'Rick and Morty', date: '1994'},
    {image: siliconValley, title: 'Silicon Valley', date: '1995'},
    {image: walkingDead, title: 'The Walking Dead', date: '1996'}
    ]
  }
  render () {
    const { tv } = this.state
    const cards = tv.map(({image, title, date}, i) => {
      return <Card2
        image={image}
        title={title}
        date={date}
        position={i}
        key={i}
      />
    })
    const cards2 = tv.map(({image, title, date}, i) => {
      return <Card2
        image={image}
        title={title}
        date={date}
        position={i}
        key={i}
      />
    }).reverse()
    return <div className='TV'>
      <section>
        <div className='TV-title'>
          <h2>Featured TV</h2>
          <NavLink to='/tv/featured'>...see all</NavLink>
        </div>
        <div className='TV-content'>
          {cards}
        </div>
      </section>
      <section>
        <div className='TV-title'>
          <h2>Popular TV</h2>
          <NavLink to='/tv/popular'>...see all</NavLink>
        </div>
        <div className='TV-content'>
          {cards2}
        </div>
      </section>
    </div>
  }
}

export default TV
