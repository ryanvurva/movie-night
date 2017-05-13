import React from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from '../ui'

const Menu = () => (
  <aside className={cx('menu', { hidden: !ui.menuShown })}>
    {/* <header>
      <button onClick={() => ui.toggleMenu()}>
        <i className='fa fa-close' aria-hidden='true' />
      </button>
    </header> */}
    <section>
      <ul>
        <li><input type='search' placeholder='search' /></li>
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
