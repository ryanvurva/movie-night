import React, { Component } from 'react'

import { observer } from 'mobx-react'

import { query, mutation } from './utils/graphql.js'
import auth from './utils/auth'

@observer
class LikeButtons extends Component {
  state = {
    kudos: '',
    id: ''
  }
  componentDidMount () {
    query(`ProfileMN(authID: "${auth.profile.user_id}") { kudos id }`).then(({ data }) => {
      this.setState({ kudos: data.ProfileMN.kudos, id: data.ProfileMN.id })
      // console.log(data)
      // console.log(this.state.kudos)
      // console.log(this.state.id)
    })
  }
  increaseKudos (plusOne) {
    mutation(`updateProfileMN(id: "${this.state.id}", kudos: ${plusOne}) {kudos}`).then(({ data }) => {
      console.log(data)
      this.setState({ kudos: data.updateProfileMN.kudos })
    })
  }
  _submit = (event) => {
    event.preventDefault()
    const plusOne = this.state.kudos + 1
    this.increaseKudos(plusOne)
  }

  render () {
    return <div className='likes'>
      <button onClick={this._submit}><i className='fa fa-thumbs-o-up' aria-hidden='true' /> {this.props.kudos}</button>
    </div>
  }
}

export default LikeButtons
