import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'

import cx from 'classnames'
import ui from '../ui'

import Nav from './Nav'
import Home from './Home'
import Menu from './Menu'
import Chat from './Chat'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:name/chat' component={Chat} />
          </Switch>
        </main>
        <footer>
          <div>&copy; 2017 Ryan A Vurva / Forward]-[ypermedia | Built at the Iron Yard</div>
        </footer>
        <Menu />
      </div>
    </Router>
  }
}

export default App
