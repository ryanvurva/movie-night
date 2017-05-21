import { observable, action } from 'mobx'
import auth from './auth'
import * as api from './api'

import fifthElement from '../../images/movies/fifth-element.jpg'
import boondockSaints from '../../images/movies/boondock-saints.jpg'
import Anchorman from '../../images/movies/anchorman.jpg'
import rogueOne from '../../images/movies/rogue-one.jpg'
import fightClub from '../../images/movies/fight-club.jpg'
import findingNemo from '../../images/movies/finding-nemo.jpg'
import forrestGump from '../../images/movies/forrest-gump.jpg'
import ID4 from '../../images/movies/id4.jpg'
import ironMan from '../../images/movies/iron-man.jpg'
import jurassicPark from '../../images/movies/jurassic-park.jpg'
import Logan from '../../images/movies/Logan.jpg'
import pulpFiction from '../../images/movies/pulp-fiction.jpg'
import Shawshank from '../../images/movies/shawshank.jpg'
import toyStory from '../../images/movies/toy-story.jpg'
import Twister from '../../images/movies/twister.jpg'

import Thrones from '../../images/tv/game-of-thrones.jpg'
import houseCards from '../../images/tv/house-cards.gif'
import dareDevil from '../../images/tv/daredevil.png'
import Saul from '../../images/tv/better-call-saul.jpg'
import Avatar from '../../images/tv/avatar.jpg'
import designatedSurvivor from '../../images/tv/designated-survivor.jpg'
import Entourage from '../../images/tv/entourage.jpeg'
import jessicaJones from '../../images/tv/jessica-jones.jpg'
import lifeInPieces from '../../images/tv/life-in-pieces.jpg'
import masterOfNone from '../../images/tv/master.jpg'
import modernFamily from '../../images/tv/modern-family.jpg'
import newsRoom from '../../images/tv/newsroom.jpg'
import rickMorty from '../../images/tv/rick-morty.jpg'
import siliconValley from '../../images/tv/silicon-valley.jpg'
import walkingDead from '../../images/tv/walking-dead.jpg'

class Store {
  @observable items = []
  @observable movies: [
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
  @observable tv: [
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

  @action load () {
    if (auth.isSignedIn) {
      api.get('/items').then(data => {
        this.items = data
      })
    }
  }

  // @action addItem (text) {
  //   api.post('/items', { item: { text } })
  //     .then(data => this.items.push(data))
  // }
  //
  // @action toggle (index) {
  //   const item = this.items[index]
  //   const complete = !item.complete
  //   api.put(`/items/${item.id}`, { item: { complete } })
  //     .then((data) => { this.items[index] = data })
  // }
  //
  // @action delete (index) {
  //   const item = this.items[index]
  //   api.destroy(`/items/${item.id}`)
  //     .then(() => this.items.splice(index, 1))
  // }
}

const store = new Store()

window.store = store

export default store
