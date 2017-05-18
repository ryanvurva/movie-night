import React, { Component } from 'react'

import fifthElement from '../images/movies/fifth-element.jpg'

class ReviewModal extends Component {
  render () {
    return <div className='ReviewModal'>
      <div className='Modal'>
        <div className='Siskel'>
          <div className='whatMovie'>
            <img src={fifthElement} width='90%' />
            <p>The Fifth Element</p>
          </div>
          <form>
            {/* <textarea name='Siskel' id='' cols='30' rows='40' /> */}
            <textarea className='Ebert' placeholder='Write a review...' />
          </form>
        </div>
      </div>
    </div>
  }
}

export default ReviewModal
