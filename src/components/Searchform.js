import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import store from './utils/store'
// import ui from './utils/ui'

class SearchForm extends Component {
  _submit = (event) => {
    // event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.refs.query.value = ''
    this.props.history.push(path)
  }

  render () {
    return <form action='#' onSubmit={this._submit}>
      <input type='search' ref='query' placeholder='Search' />
    </form>
  }
}

export default withRouter(SearchForm)
