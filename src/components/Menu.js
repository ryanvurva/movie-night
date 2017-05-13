import React from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from '../ui'

const Menu = () => (
  <aside className={cx('menuMobile', { hidden: !ui.menuShown })}>
    <section>
      <div className='button_box2'>
        <form className='form-wrapper-2 cf'>
          <input type='text' placeholder='Search here...' required />
          <button type='submit'><i className='fa fa-search' aria-hidden='true' /></button>
        </form>
      </div>
      <ul>
        {/* <li><input type='search' id='search' placeholder='search' /></li> */}
        <li>Log In/Log Out</li>
        <li><i className='fa fa-user' aria-hidden='true' /> - View Profile</li>
        <li>Browse</li>
        <li>Chat</li>
        <li>Reviews</li>
        <li>Watch Lists</li>
      </ul>
    </section>
  </aside>
)

export default observer(Menu)
