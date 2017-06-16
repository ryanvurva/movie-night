import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { get } from './utils/api'

import Card2 from './Card2'

@observer
class TV extends Component {
  state = {
    popularTv: [],
    airingToday: [],
    topRated: []
  }
  componentDidMount () {
    get('/tv/popular').then((data) => {
      this.setState({ popularTv: data.results })
    })
    get('/tv/airing_today').then((data) => {
      this.setState({ airingToday: data.results })
    })
    get('/tv/top_rated').then((data) => {
      this.setState({ topRated: data.results })
    })
  }
  render () {
    const { airingToday } = this.state
    const airingTodayCards = airingToday.map((tvItem, i) => {
      return <Card2
        image={tvItem.poster_path}
        title={tvItem.name}
        date={tvItem.first_air_date}
        id={tvItem.id}
        position={i}
        key={i}
      />
    })
    const { popularTv } = this.state
    const popularTvCards = popularTv.map((tvItem, i) => {
      return <Card2
        image={tvItem.poster_path}
        title={tvItem.name}
        date={tvItem.first_air_date}
        id={tvItem.id}
        position={i}
        key={i}
      />
    })
    const { topRated } = this.state
    const topRatedCards = topRated.map((tvItem, i) => {
      return <Card2
        image={tvItem.poster_path}
        title={tvItem.name}
        date={tvItem.first_air_date}
        id={tvItem.id}
        position={i}
        key={i}
      />
    })
    return <div className='TV'>
      <section>
        <div className='TV-title'>
          <h2>Featured TV</h2>
          {/* <NavLink to='/tv/featured'>...see all</NavLink> */}
        </div>
        <div className='TV-content'>
          {popularTvCards}
        </div>
      </section>
      <section>
        <div className='TV-title'>
          <h2>Airing Today</h2>
          {/* <NavLink to='/tv/featured'>...see all</NavLink> */}
        </div>
        <div className='TV-content'>
          {airingTodayCards}
        </div>
      </section>
      <section>
        <div className='TV-title'>
          <h2>Top Rated</h2>
          {/* <NavLink to='/tv/featured'>...see all</NavLink> */}
        </div>
        <div className='TV-content'>
          {topRatedCards}
        </div>
      </section>
    </div>
  }
}

export default TV
