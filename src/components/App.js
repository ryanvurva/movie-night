import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import cx from 'classnames'
// import ui from '../ui'

import Browse from './Browse'
import Chat from './Chat'
import Home from './Home'
import LogIn from './LogIn'
import Menu from './Menu'
import Nav from './Nav'
import Profile from './Profile'
import Reviews from './Reviews'
import Vault from './Vault'
import WatchList from './WatchList'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/browse/:letter' component={Browse} />
            <Route exact path='/user/:name' component={Profile} />
            <Route exact path='/chat/:user/:name' component={Chat} />
            <Route exact path='/reviews/:user/:name' component={Reviews} />
            <Route exact path='/watchlist/:user/:name' component={WatchList} />
            <Route exact path='/vault/:user/:name' component={Vault} />
            <Route exact path='/auth0' component={LogIn} />
          </Switch>
        </main>
        <footer>
          <div>movieNight &copy; 2017 Ryan A Vurva</div><div>Forward]-[ypermedia &trade; | Built with <i className='fa fa-heartbeat' aria-hidden='true' /> at the Iron Yard</div>
        </footer>
        <Menu />
      </div>
    </Router>
  }
}

export default App
