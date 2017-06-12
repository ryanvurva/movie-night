import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import TMDB from '../images/powered-by-rectangle-blue.svg'

import auth from './utils/auth'
// import api from './utils/api'
// import cx from 'classnames'
// import ui from '../ui'

import Movies from './Movies'
import TV from './Tv'
import Splash from './Splash'
import Home from './Home'
import Menu from './Menu'
import Nav from './Nav'
import Profile from './Profile.js'
import Reviews from './Reviews'
import Overlay from './Overlay'
import Search from './Search'
import Users from './Users'

@observer
class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            {auth.isSignedIn ? <Route exact path='/' component={Home} /> : <Route exact path='/' component={Splash} />}
            <Route exact path='/browse/movies' component={Movies} />
            <Route exact path='/browse/tv' component={TV} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/user/:id' component={Profile} />
            <Route exact path='/search/:query' component={Search} />
            <Route exact path='/reviews' component={Reviews} />
            {/* <Route exact path='/' component={Home} /> */}
          </Switch>
        </main>
        <footer>
          <div className='footer-space-1'>
            <div><span className='smallCaps'>movieNight</span> &copy; 2017</div>
            <div>
              <img src={TMDB} alt='the movie database' width='60px' />
            </div>
          </div>
          <div className='footer-space-2'>Ryan A Vurva | <span className='smallCaps'>Forward]-[ypermedia</span> &trade;</div>
          <div>Built with <i className='fa fa-heartbeat' aria-hidden='true' /> at the Iron Yard</div>
        </footer>
        <Menu />
        <Route path='/overlay/:type' component={Overlay} />
      </div>
    </Router>
  }
}

export default App
