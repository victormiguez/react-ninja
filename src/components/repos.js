'use strict'

import React from 'react'

const Repos = ({ className, title, repos }) => (
  <div className={className + ' tile is-child box'}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        index < 10 &&
          <li key={index}>
            <a href={repo.link} target='_blank'>{repo.name}</a>
          </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
}

export default Repos
