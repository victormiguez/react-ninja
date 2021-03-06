'use strict'

import React, { PropTypes } from 'react'

import Actions from './actions'

const UserInfo = ({ userInfo, handlePublicReposSearch, handleStarredSearch }) => (
  <div className='tile is-parent user-info'>
    <div className='card is-fullwidth'>
      <div className='card-image'>
        <figure className='image'>
          <img src={userInfo.avatarUrl} alt='' />
        </figure>
      </div>

      <div className='card-content'>
        <h1 className='username title is-3'>
          <a href={`https://github.com/${userInfo.login}`} target='_blank'>
            {userInfo.name}
          </a>
        </h1>

        <div className='repos-info level'>
          <div className='level-item has-text-centered'>
            <p className='heading'>Repositórios</p>
            <p className='title'>{userInfo.publicRepos}</p>
          </div>
          <div className='level-item has-text-centered'>
            <p className='heading'>Seguidores</p>
            <p className='title'>{userInfo.followers}</p>
          </div>
          <div className='level-item has-text-centered'>
            <p className='heading'>Seguindo</p>
            <p className='title'>{userInfo.following}</p>
          </div>
        </div>
      </div>

      <Actions
        handlePublicReposSearch={handlePublicReposSearch}
        handleStarredSearch={handleStarredSearch}
      />
    </div>
  </div>
)

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    publicRepos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
