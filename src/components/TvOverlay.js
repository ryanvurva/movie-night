import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Buttons from './TvButtons'
import LikeButtons from './LikeButtons'

import auth from './utils/auth'
import { get } from './utils/api'

@observer
class TvOverlay extends Component {
  state = {
    thisShow: []
  }
  _goBack () {
    window.history.back()
  }
  componentDidMount () {
    get(`/tv/${this.props.match.params.id}`).then((data) => {
      this.setState({ thisShow: data })
    })
  }
  render () {
    const show = this.state.thisShow
    return <div className='inner'>
      <div className='overlayLeft'>
        <img src={`http://image.tmdb.org/t/p/w342${show.poster_path}`} />
        <div className='userFeatures'>
          {auth.isSignedIn ? <Buttons id={show.id} /> : null}
        </div>
      </div>
      <div className='overlayRight'>
        <div className='overlayHeader'>
          <div className='Title'>
            <h2>{show.name}</h2>
            <p>({show.first_air_date})</p>
          </div>
          <div className='userPopularity'>
            <NavLink to='/reviews/:show'>12 reviews</NavLink>
            {auth.isSignedIn ? <LikeButtons /> : null}
          </div>
        </div>
        <div className='aboutThis'>
          <p>{show.overview}</p>
        </div>
        <div className='exitOverlay'>
          <NavLink to='#' onClick={this._goBack}><i className='fa fa-times-circle' aria-hidden='true' /> close</NavLink>
        </div>
      </div>
    </div>
  }
}

export default TvOverlay
