import { observable, action } from 'mobx'

class UI {
  @observable menuShown = false
  @observable notice

  @action toggleMenu () {
    this.menuShown = !this.menuShown
  }
}

const ui = new UI()
window.ui = ui
export default ui
