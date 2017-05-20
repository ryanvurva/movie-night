import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

@observer
class MovieOverlay extends Component {
  _goBack () {
    window.history.back()
  }
  render () {
    return <div className='reviewOverlay'>
      <div className='inner'>
        <div className='Review-image' />
        <div className='Review-info'>
          <p>The Fifth Element (1997)</p>
          <form>
            <textarea placeholder='Write a review...' />
          </form>
          <button>SUBMIT</button><button><NavLink to='#' onClick={this._goBack}>x</NavLink></button>
        </div>
      </div>
    </div>
  }
}

export default MovieOverlay
