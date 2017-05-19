import { observable, action } from 'mobx'

class UI {
  @observable menuShown = false
  @observable reviewShown = false
  // @observable notice
  // @observable modal = false

  @action toggleMenu () {
    this.menuShown = !this.menuShown
  }

  @action toggleReview () {
    this.reviewShown = !this.reviewShown
  }

  // @action
}

const ui = new UI()
window.ui = ui
export default ui
