import React, { Component } from 'react'
import reel from '../images/movie-film-reel.svg'

class ComingSoon extends Component {
  render () {
    return <div className='ComingSoon'>
      <h3>coming soon to a website near you...</h3>
      <img src={reel} />
    </div>
  }
}

export default ComingSoon
