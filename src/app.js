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
            avatar_url,
            name,
            login,
            public_repos,
            followers,
            following
          }
        })
      })
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
    )
  }
}

export default App
