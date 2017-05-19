import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ui from '../ui'

import fifthElement from '../images/movies/fifth-element.jpg'

@observer
class ReviewModal extends Component {
  render () {
    return <div className='overlay'>
      <div className='Modal'>
        <h2>What do <em>you</em> think?</h2>
        <div className='Review'>
          <div className='Siskel'>
            <img src={fifthElement} />
            <p>The Fifth Element</p>
          </div>
          <div className='Ebert'>
            <form>
              <textarea placeholder='Write a review...' />
            </form>
            <div className='reviewButtons'>
              <button onClick={() => ui.toggleReview}>X</button><button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ReviewModal
