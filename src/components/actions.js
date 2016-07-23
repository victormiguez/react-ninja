'use strict'

import React from 'react'

const Actions = ({ handlePublicReposSearch, handleStarredSearch }) => (
  <footer className='card-footer actions'>
    <a onClick={handlePublicReposSearch} className='card-footer-item'>Ver repositórios</a>
    <a onClick={handleStarredSearch} className='card-footer-item'>Ver favoritos</a>
  </footer>
)

export default Actions
