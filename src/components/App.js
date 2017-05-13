import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'

import cx from 'classnames'
import ui from '../ui'

import Nav from './Nav'
import Home from './Home'
import Menu from './Menu'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
        <footer>
          ...
        </footer>
        <Menu />
      </div>
    </Router>
  }
}

export default App
