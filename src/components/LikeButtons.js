import React, { Component } from 'react'

class LikeButtons extends Component {
  render () {
    return <div className='likes'>
      <button><i className='fa fa-thumbs-o-up' aria-hidden='true' /> {this.props.kudos}</button>
    </div>
  }
}

export default LikeButtons
