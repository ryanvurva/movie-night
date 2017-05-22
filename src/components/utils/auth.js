import Auth0Lock from 'auth0-lock'
import IdTokenVerifier from 'idtoken-verifier'
import { observable, autorun, computed, action } from 'mobx'
// import store from './store'

const CLIENT_ID = '2MbGCIU5HQ-wJo325Nu_SrP7g0yPNQtq'
const CLIENT_DOMAIN = 'movienight.auth0.com'

class Auth {
  @observable token
  @observable profile

  constructor () {
    this.token = window.localStorage.getItem('auth:token')
    this.profile = JSON.parse(window.localStorage.getItem('auth:profile'))
    this.lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN)
    this.lock.on('authenticated', ({ idToken }) => {
      this.token = idToken
      this.lock.getProfile(idToken, (error, profile) => {
        if (error) {
          this.lock.show({
            flashMessage: {
              type: 'error',
              text: error.error_description
            }
          })
        }
        this.profile = profile
        console.log(profile)
      })
    })

    autorun(() => {
      this.checkExpiration()
      if (this.isSignedIn) {
        window.localStorage.setItem('auth:token', this.token)
        window.localStorage.setItem('auth:profile', JSON.stringify(this.profile))
      } else {
        window.localStorage.removeItem('auth:token')
        window.localStorage.removeItem('auth:profile')
      }
    })
  }

  checkExpiration () {
    if (this.token) {
      const jwt = new IdTokenVerifier().decode(this.token)
      const now = new Date()
      const exp = new Date(0)
      exp.setUTCSeconds(jwt.payload.exp)
      if (now > exp) {
        this.signOut()
        return false
      }
      return true
    }
  }

  @action signIn () {
    this.lock.show()
  }

  @action signOut () {
    this.token = null
  }

  @computed get isSignedIn () {
    return this.token && this.profile
  }
}

const auth = new Auth()
export default auth
