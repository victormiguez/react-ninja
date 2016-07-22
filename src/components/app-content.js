'use strict'

import React, { PropTypes } from 'react'

import Search from './search'
import UserInfo from './user-info'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred }) => (
  <div className='app container content'>
    <Search />

    <div className='tile is-ancestor'>
      {!!userInfo && <UserInfo userInfo={userInfo} />}

      <div className='tile is-6 is-vertical is-parent'>
        {!!repos.length &&
          <Repos
            className='repos'
            title='Repositórios'
            repos={[{name: 'Nome do repo', link: '#'}]}
          />
        }

        {!!starred.length &&
          <Repos
            className='starred'
            title='Favoritos'
            repos={[{name: 'Nome do fav', link: '#'}]}
          />
        }
      </div>
    </div>
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
