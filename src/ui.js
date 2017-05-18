import { observable, action } from 'mobx'

class UI {
  @observable menuShown = false
  @observable notice
  @observable reviewShown = false
  @observable modal = false

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
