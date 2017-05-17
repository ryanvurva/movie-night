import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import gravatar from 'gravatar'
// import Ryan from '../images/avatars/robocop.svg'

class Profile extends Component {
  render () {
    return <div className='Profile'>
      <div className='profileHeader'>
        <div className='profilePic'>
          <img src={gravatar.url('ryanvurva@gmail.com')} alt='user profile image' width='100%' height='100%' />
        </div>
        <div>
          <div className='userName'>
            <h1>theVurv</h1>
            <h3>'Ryan Vurva'</h3>
            {/* <div className='editIcon'>
              maybe make this a modal as well
              <NavLink to='/edit-profile/:user'><i className='fa fa-pencil' aria-hidden='true' /></NavLink>
            </div> */}
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
