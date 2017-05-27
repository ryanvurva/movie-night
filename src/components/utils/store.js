import { observable, action } from 'mobx'
import auth from './auth'
import * as api from './api'

class Store {
  @observable movies = []

  @action load () {
    if (auth.isSignedIn) {
      // console.log('here')
      api.get('/movie/popular').then((data) => {
        this.movies = data
        // console.log(data)
      })
    }
  }

  @action _submit = (event) => {
    event.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.refs.query.value = ''
    this.props.history.push(path)
  }

  // @action addItem (text) {
  //   api.post('/items', { item: { text } })
  //     .then(data => this.items.push(data))
  // }
  //
  // @action toggle (index) {
  //   const item = this.items[index]
  //   const complete = !item.complete
  //   api.put(`/items/${item.id}`, { item: { complete } })
  //     .then((data) => { this.items[index] = data })
  // }
  //
  // @action delete (index) {
  //   const item = this.items[index]
  //   api.destroy(`/items/${item.id}`)
  //     .then(() => this.items.splice(index, 1))
  // }
}

const store = new Store()

window.store = store

export default store
