'use strict'

import React from 'react'

import Actions from './actions'

const UserInfo = () => (
  <div className='tile is-parent user-info'>
    <div className='card is-fullwidth'>
      <div className='card-image'>
        <figure className='image'>
          <img src='https://avatars.githubusercontent.com/u/4250355?v=3' alt='' />
        </figure>
      </div>

      <div className='card-content'>
        <h1 className='username title is-3'>Victor Miguez</h1>

        <div className='repos-info level'>
          <div className='level-item has-text-centered'>
            <p className='heading'>Repositórios</p>
            <p className='title'>3,456</p>
          </div>
          <div className='level-item has-text-centered'>
            <p className='heading'>Seguidores</p>
            <p className='title'>123</p>
          </div>
          <div className='level-item has-text-centered'>
            <p className='heading'>Seguindo</p>
            <p className='title'>789</p>
          </div>
        </div>
      </div>

      <Actions />
    </div>
  </div>
)

export default UserInfo
