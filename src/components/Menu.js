import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from '../ui'

import auth from './utils/auth'

const Menu = () => (
  <div className='sidebars'>
    <aside className={cx('menuMobile', { hidden: !ui.menuShown })}>
      <section>
        <div className='button_box2'>
          <form className='form-wrapper-2 cf'>
            <input type='text' placeholder='Search here...' required />
            <button type='submit'><i className='fa fa-search' aria-hidden='true' /></button>
          </form>
        </div>
        <ul>
          <li onClick={() => auth.signIn()}><NavLink to='/auth0'><i className='fa fa-lock' aria-hidden='true' /> - Log In/Out</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/:name'><i className='fa fa-id-card-o' aria-hidden='true' /> - View Profile</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/browse/movies'><i className='fa fa-film' aria-hidden='true' /> - Movies</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/browse/tv'><i className='fa fa-television' aria-hidden='true' /> - TV</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/reviews/:name'><i className='fa fa-address-book-o' aria-hidden='true' /> - Reviews</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/watchlist/:name'><i className='fa fa-eye' aria-hidden='true' /> - Watch List</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/vault/:name'><i className='fa fa-university' aria-hidden='true' /> - Vaults</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/chat/:name' title='...pre-beta'><i className='fa fa-comments' aria-hidden='true' /> - Chat <i className='fa fa-exclamation-circle' aria-hidden='true' /></NavLink></li>
        </ul>
      </section>
    </aside>
    <aside className='menuDesktop'>
      <section>
        <ul>
          <li><NavLink to='/:name'><i className='fa fa-id-card-o' aria-hidden='true' /> - View Profile</NavLink></li>
          <li>|</li>
          <li><NavLink to='/browse/movies'><i className='fa fa-film' aria-hidden='true' /> - Movies</NavLink></li>
          <li>|</li>
          <li><NavLink to='/browse/tv'><i className='fa fa-television' aria-hidden='true' /> - TV</NavLink></li>
          <li>|</li>
          <li><NavLink to='/reviews/:name'><i className='fa fa-address-book-o' aria-hidden='true' /> - Reviews</NavLink></li>
          <li>|</li>
          <li><NavLink to='/chat/:name' title='...pre-beta'><i className='fa fa-comments' aria-hidden='true' /> - Chat <i className='fa fa-exclamation-circle' aria-hidden='true' /></NavLink></li>
        </ul>
      </section>
    </aside>
  </div>
)

export default observer(Menu)
