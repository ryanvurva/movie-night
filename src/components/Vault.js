import React, { Component } from 'react'

class Vault extends Component {
  render () {
    return <div className='Vault'>
      <h1>Vault</h1>
      <h3>Coming Soon to a website near you... <i className='fa fa-cog fa-spin fa-2x fa-fw' /></h3>
      <div className='vaultDisplay'>
        <div className='vaultLists'>
          <h4>Owned</h4>
        </div>
        <div className='vaultLists'>
          <h4>Watched</h4>
        </div>
      </div>
    </div>
  }
}

export default Vault
