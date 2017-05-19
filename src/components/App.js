import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

// import auth from './utils/auth'

import TMDB from '../images/powered-by-rectangle-blue.svg'

// import cx from 'classnames'
// import ui from '../ui'

import Movies from './Movies'
import TV from './Tv'
import Chat from './Chat'
import Home from './Home'
import Menu from './Menu'
import Nav from './Nav'
import Profile from './Profile'
import Reviews from './Reviews'
import Vault from './Vault'
import WatchList from './WatchList'
import Review from './Review'
import MovieOverlay from './MovieOverlay'
import TvOverlay from './TvOverlay'
import ReviewOverlay from './ReviewOverlay'

@observer
class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            {/* {auth.isSignedIn ? <Route exact path='/' component={Dashboard} /> : <Route exact path='/' component={Home} />} */}
            <Route path='/browse/movies' component={Movies} />
            <Route path='/browse/tv' component={TV} />
            <Route exact path='/:name' component={Profile} />
            <Route exact path='/chat/:name' component={Chat} />
            <Route exact path='/reviews/:name' component={Reviews} />
            <Route exact path='/watchlist/:name' component={WatchList} />
            <Route exact path='/vault/:name' component={Vault} />
            <Route path='/' component={Home} />
          </Switch>
        </main>
        <footer>
          <div className='footer-space-1'>
            <div>movieNight &copy; 2017</div>
            <div>
              <img src={TMDB} alt='the movie database' width='60px' />
            </div>
          </div>
          <div>Ryan A Vurva | Forward]-[ypermedia &trade;</div>
          <div>Built with <i className='fa fa-heartbeat' aria-hidden='true' /> at the Iron Yard</div>
        </footer>
        <Menu />
        <Review />
        <Route path='/movie/:id' component={MovieOverlay} />
        <Route path='/tv/:id' component={TvOverlay} />
        <Route path='/review/:id' component={ReviewOverlay} />
      </div>
    </Router>
  }
}

export default App
