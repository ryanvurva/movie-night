import Auth0Lock from 'auth0-lock'
import { observable } from 'mobx'

const CLIENT_ID = '2MbGCIU5HQ-wJo325Nu_SrP7g0yPNQtq'
const CLIENT_DOMAIN = 'movienight.auth0.com'

class Auth {
  @observable token

  constructor () {
    this.lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN)
    this.lock.on('authenticated', ({ idToken }) => {
      this.token = idToken
    })
  }

  signIn () {
    this.lock.show()
  }

  get isSignedIn () {
    return this.token
  }
  }

const auth = new Auth()
export default auth
