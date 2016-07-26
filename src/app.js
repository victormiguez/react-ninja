'use strict'

import React, { Component } from 'react'

import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()

    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }

    this.handleSearch = this.handleSearch.bind(this)
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
          repos: [],
          starred: []
        })
      })
  }

  getRepos (type) {
    return () => {
      const login = this.state.userInfo.login
      ajax()
      .get(`https://api.github.com/users/${login}/${type}`)
      .then((repos) => {
        this.setState({
          [type]: repos.map((repo, index) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch}
        handlePublicReposSearch={this.getRepos('repos')}
        handleStarredSearch={this.getRepos('starred')}
      />
    )
  }
}

export default App
