import React, { Component } from 'react'

class LikeButtons extends Component {
  render () {
    return <div className='likes'>
      <button><i className='fa fa-thumbs-o-up' aria-hidden='true' /> 186</button>
      <button><i className='fa fa-thumbs-o-down' aria-hidden='true' /> 9</button>
    </div>
  }
}

export default LikeButtons
