import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

class Browse extends Component {
  render () {
    return <div className='Browse'>
      <div className='letterArea'>
        <ul className='letterBar'>
          {letters.map((l) => (
            <li key={l}>
              <NavLink to={`/browse/${l}`}>{l}</NavLink>
            </li>
          ))}
          <li><NavLink to='/browse/0'>#</NavLink></li>
        </ul>
      </div>
    </div>
  }
}

export default Browse
