import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from '../ui'

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
          <li onClick={() => ui.toggleMenu()}><NavLink to='/auth0'><i className='fa fa-lock' aria-hidden='true' /> - Log In/Out</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/user/:name'><i className='fa fa-id-card-o' aria-hidden='true' /> - View Profile</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/browse/:letter'><i className='fa fa-arrows-alt' aria-hidden='true' /> - Browse</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/chat/:user/:name' title='...pre-beta'><i className='fa fa-comments' aria-hidden='true' /> - Chat <i className='fa fa-exclamation-circle' aria-hidden='true' /></NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/reviews/:user/:name'><i className='fa fa-address-book-o' aria-hidden='true' /> - Reviews</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/watchlist/:user/:name'><i className='fa fa-eye' aria-hidden='true' /> - Watch List</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/vault/:user/:name'><i className='fa fa-film' aria-hidden='true' /> - Movie Vault</NavLink></li>
        </ul>
      </section>
    </aside>
    <aside className={cx('menuDesktop', { hidden: !ui.menuShown })}>
      <section>
        <ul>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/auth0'><i className='fa fa-lock' aria-hidden='true' /> Log In/Out</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/user/:name'><i className='fa fa-id-card-o' aria-hidden='true' /> View Profile</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/browse/:letter'><i className='fa fa-arrows-alt' aria-hidden='true' /> Browse</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/chat/:user/:name' title='...pre-beta'><i className='fa fa-comments' aria-hidden='true' /> Chat <i className='fa fa-exclamation-circle' aria-hidden='true' /></NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/reviews/:user/:name'><i className='fa fa-address-book-o' aria-hidden='true' /> Reviews</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/watchlist/:user/:name'><i className='fa fa-eye' aria-hidden='true' /> Watch List</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/vault/:user/:name'><i className='fa fa-film' aria-hidden='true' /> Movie Vault</NavLink></li>
        </ul>
      </section>
    </aside>
  </div>
)

export default observer(Menu)
