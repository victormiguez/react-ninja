'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()

    this.state = {
      userInfo: {
        photo: 'https://avatars.githubusercontent.com/u/4250355?v=3',
        username: 'Victor Miguez',
        login: 'victormiguez',
        repos: 10,
        followers: 15,
        following: 30
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
