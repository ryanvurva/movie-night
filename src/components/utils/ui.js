import { observable, action } from 'mobx'

class UI {
  @observable menuShown = false
  @observable reviewShown = false

  @action toggleMenu () {
    this.menuShown = !this.menuShown
  }

  @action toggleReview () {
    this.reviewShown = !this.reviewShown
  }
}

const ui = new UI()
window.ui = ui
export default ui
