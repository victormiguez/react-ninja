'use strict'

import React, { Component } from 'react'

import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()

    this.state = {
      userInfo: null,
      publicRepos: [],
      starred: []
    }
  }

  handleSearch (event) {
    event.preventDefault()
    const value = event.target.search.value
    ajax()
    .get(`https://api.github.com/users/${value}`)
    .then(
      ({ avatar_url, name, login, public_repos, followers, following }) => {
        this.setState({
          userInfo: {
            avatarUrl: avatar_url,
            name,
            login,
            publicRepos: public_repos,
            followers,
            following
          },
          publicRepos: [],
          starred: []
        })
      })
  }

  handlePublicReposSearch () {
    const login = this.state.userInfo.login
    ajax()
    .get(`https://api.github.com/users/${login}/repos`)
    .then((repos) => {
      this.setState({
        publicRepos: repos
      })
    })
  }

  handleStarredSearch () {
    const login = this.state.userInfo.login
    ajax()
    .get(`https://api.github.com/users/${login}/starred`)
    .then((repos) => {
      this.setState({
        starred: repos
      })
    })
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        publicRepos={this.state.publicRepos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        handlePublicReposSearch={() => this.handlePublicReposSearch()}
        handleStarredSearch={() => this.handleStarredSearch()}
      />
    )
  }
}

export default App
