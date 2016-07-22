'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => (
  <div className='columns'>
    <form
      onSubmit={handleSearch}
      className='search column control'>
      <input
        name='search'
        className='input'
        type='search'
        placeholder='Digite o nome do usuário'
      />
    </form>
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
