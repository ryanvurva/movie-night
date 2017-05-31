import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from './utils/ui'
import auth from './utils/auth'

import Searchform from './Searchform'
import MobileLogin from './MobileLogin'

@observer
class Menu extends Component {
  _submit = (event) => {
    event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.refs.query.value = ''
    this.props.history.push(path)
  }
  render () {
    return <div className='sidebars'>
      <aside className={cx('menuMobile', { hidden: !ui.menuShown })}>
        <section>
          <Searchform />
          {/* <div className='button_box2'>
            <form action='#' className='form-wrapper-2 cf'>
              <input type='search' ref='query' placeholder='Search here...' required />
              <button type='submit' onSubmit={this._submit}><i className='fa fa-search' aria-hidden='true' /></button>
            </form>
          </div> */}
          <MobileLogin />
          <ul>
            {auth.isSignedIn ? <li onClick={() => ui.toggleMenu()}><NavLink to={`/user/${auth.cmsProfileId}`}><i className='fa fa-id-card-o' aria-hidden='true' /> - View Profile</NavLink></li> : null}
            <li onClick={() => ui.toggleMenu()}><NavLink to='/browse/movies'><i className='fa fa-film' aria-hidden='true' /> - Movies</NavLink></li>
            <li onClick={() => ui.toggleMenu()}><NavLink to='/browse/tv'><i className='fa fa-television' aria-hidden='true' /> - TV</NavLink></li>
            <li onClick={() => ui.toggleMenu()}><NavLink to='/reviews/:name'><i className='fa fa-address-book-o' aria-hidden='true' /> - Reviews</NavLink></li>
            <li onClick={() => ui.toggleMenu()}><NavLink to='/watchlist/:name'><i className='fa fa-eye' aria-hidden='true' /> - Watch List</NavLink></li>
            <li onClick={() => ui.toggleMenu()}><NavLink to='/vault/:name'><i className='fa fa-university' aria-hidden='true' /> - Vaults</NavLink></li>
            {/* <li onClick={() => ui.toggleMenu()}><NavLink to='/chat/:name' title='...pre-beta'><i className='fa fa-comments' aria-hidden='true' /> - Chat <i className='fa fa-exclamation-circle' aria-hidden='true' /></NavLink></li> */}
          </ul>
        </section>
      </aside>
      <aside className='menuDesktop'>
        <section>
          <ul>
            {auth.isSignedIn ? <li><NavLink to={`/user/${auth.cmsProfileId}`}><i className='fa fa-id-card-o' aria-hidden='true' /> - View Profile</NavLink></li> : <button onClick={() => auth.signIn()}><i className='fa fa-lock' aria-hidden='true' /> - Log in/Sign up</button>}
            {/* <li><NavLink to='/:name'><i className='fa fa-id-card-o' aria-hidden='true' /> - View Profile</NavLink></li> */}
            <li>|</li>
            <li><NavLink to='/browse/movies'><i className='fa fa-film' aria-hidden='true' /> - Movies</NavLink></li>
            <li>|</li>
            <li><NavLink to='/browse/tv'><i className='fa fa-television' aria-hidden='true' /> - TV</NavLink></li>
            <li>|</li>
            <li><NavLink to='/reviews/:name'><i className='fa fa-address-book-o' aria-hidden='true' /> - Reviews</NavLink></li>
            {/* <li>|</li> */}
            {/* <li><NavLink to='/chat/:name' title='...pre-beta'><i className='fa fa-comments-o' aria-hidden='true' /> - Chat <i className='fa fa-exclamation-circle' aria-hidden='true' /></NavLink></li> */}
          </ul>
        </section>
      </aside>
    </div>
  }
}

export default Menu
