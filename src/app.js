'use strict'

import React from 'react'

const App = () => (
  <div className='app container content'>
    <div className='columns'>
      <div className='search column control'>
        <input
          className='input'
          type='search'
          placeholder='Digite o nome do usuário'
        />
      </div>
    </div>

    <div className='tile is-ancestor user-info'>
      <div className='tile is-parent'>
        <div className='tile is-child box'>
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

            <footer className='card-footer actions'>
              <a className='card-footer-item'>Ver repositórios</a>
              <a className='card-footer-item'>Ver favoritos</a>
            </footer>
          </div>
        </div>
      </div>
      <div className='tile is-6 is-vertical is-parent'>
        <div className='tile is-child box repos'>
          <h2>Repositórios</h2>
          <ul>
            <li>
              <a href=''>Nome do repositório</a>
            </li>
          </ul>
        </div>
        <div className='tile is-child box starred'>
          <h2>Favoritos</h2>
          <ul>
            <li>
              <a href=''>Nome do repositório</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default App
