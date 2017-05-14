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
      <div className='letterSelector'>
        <select name='browse' id='browse'>
          {letters.map((l) => (
            <option key={l}>
              {/* need to resolve this issue */}
              {l}
            </option>
          ))}
          {/* <option value='value1'>Value 1</option>
          <option value='value2'>Value 2</option>
          <option value='value3'>Value 3</option> */}
        </select>
        <button><i className='fa fa-search' aria-hidden='true' /></button>
      </div>
    </div>
  }
}

export default Browse
