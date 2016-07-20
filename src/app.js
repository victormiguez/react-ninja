'use strict'

import React from 'react'

import Search from './components/search'
import UserInfo from './components/user-info'
import Repos from './components/repos'

const App = () => (
  <div className='app container content'>
    <Search />

    <div className='tile is-ancestor'>
      <UserInfo />
      <div className='tile is-6 is-vertical is-parent'>
        <Repos
          className='repos'
          title='Repositórios'
          repos={[
            {
              name: 'Nome do repo',
              link: '#'
            }
          ]}
        />
        <Repos
          className='starred'
          title='Favoritos'
          repos={[
            {
              name: 'Nome do fav',
              link: '#'
            }
          ]}
        />
      </div>
    </div>
  </div>
)

export default App
