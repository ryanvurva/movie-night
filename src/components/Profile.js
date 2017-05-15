import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Ryan from '../images/Ryan-3.jpg'

class Profile extends Component {
  render () {
    return <div className='Profile'>
      <div className='profileHeader'>
        <div className='profilePic'>
          <img src={Ryan} alt='user profile image' width='100%' height='100%' />
        </div>
        <div className='userName'>
          <h1>Ryan Vurva</h1>
          <h3>'theVurv'</h3>
          {/* <p>a brief description...  more</p> */}
          <div className='editIcon'>
            {/* maybe make this a modal as well */}
            {/* <NavLink to='/edit-profile/:user'><i className='fa fa-pencil' aria-hidden='true' /></NavLink> */}
          </div>
        </div>
      </div>
      <div className='profileContent'>
        <div>
          <ul>
            <li>word</li>
            <li>word</li>
            <li>word</li>
            <li>word</li>
            <li>word</li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default Profile
