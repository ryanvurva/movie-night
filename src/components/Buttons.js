import React, { Component } from 'react'
import ui from '../ui'

class Buttons extends Component {
  _toggle = () => {
    console.log('click')
    ui.modal = !ui.modal
  }
  render () {
    return <div className='Buttons'>
      <button><i className='fa fa-university' aria-hidden='true' /></button>
      <button><i className='fa fa-eye' aria-hidden='true' /></button>
      <button onClick={this._toggle}><i className='fa fa-pencil-square-o' aria-hidden='true' /></button>
    </div>
  }
}

export default Buttons
