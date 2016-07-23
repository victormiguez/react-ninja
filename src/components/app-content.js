'use strict'

import React, { PropTypes } from 'react'

import Search from './search'
import UserInfo from './user-info'
import Repos from './repos'

const AppContent = ({ userInfo, publicRepos, starred, handleSearch, handlePublicReposSearch, handleStarredSearch }) => (
  <div className='app container content'>
    <Search handleSearch={handleSearch} />

    <div className='tile is-ancestor'>
      {!!userInfo && <UserInfo userInfo={userInfo} handlePublicReposSearch={handlePublicReposSearch} handleStarredSearch={handleStarredSearch} />}

      <div className='tile is-6 is-vertical is-parent'>
        {!!publicRepos.length &&
          <Repos
            className='repos'
            title='Repositórios'
            repos={publicRepos}
          />
        }

        {!!starred.length &&
          <Repos
            className='starred'
            title='Favoritos'
            repos={starred}
          />
        }
      </div>
    </div>
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  publicRepos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
