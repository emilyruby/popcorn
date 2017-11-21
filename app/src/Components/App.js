import React, { Component } from 'react'
import { InstantSearch, Configure } from 'react-instantsearch/dom'
import MovieSearch from './App/MovieSearch.js'
import { algoliaClient } from '../algolia.js'
import '../Styles/App.css'

class App extends Component {
  render () {
    return (
      <InstantSearch
        indexName='movies'
        algoliaClient={algoliaClient}>
        <Configure hitsPerPage={10} />
        <MovieSearch />
      </InstantSearch>
    )
  }
}

export default App
