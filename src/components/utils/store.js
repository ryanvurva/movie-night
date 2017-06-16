// import { observable, action } from 'mobx'
// import auth from './auth'
// import * as api from './api'

// class Store {
  // @observable movies = []

  // @action load () {
  //   if (auth.isSignedIn) {
  //     api.get('/movie/popular').then((data) => {
  //       this.movies = data
  //     })
  //   }
  // }

  // @action _submit = (event) => {
  //   event.preventDefault()
  //   const query = this.refs.query.value
  //   const path = query.length > 0 ? `/search/${query}` : '/'
  //   this.refs.query.value = ''
  //   this.props.history.push(path)
  // }
// }

// const store = new Store()

// window.store = store

// export default store
