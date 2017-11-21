import React, { Component } from 'react'
import { Hits, Pagination } from 'react-instantsearch/dom'
import Film from './Results/Film.js'
import { css } from 'glamor'
import { connectStateResults } from 'react-instantsearch/connectors'

const results = css({
  'flexBasis': 'auto',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'justifyContent': 'center'
})

const hitsWrapper = css({
  'marginTop': '60px',
  'display': 'flex',
  'flexDirection': 'row',
  'alignItems': 'center',
  'justifyContent': 'center'
})

const noResults = css({
  'height': '40vh',
  'display': 'flex',
  'alignItems': 'center',
  'color': 'white'
})

const Content = connectStateResults(
  ({ searchState, searchResults }) => {
    if (searchResults && searchResults.nbHits === 0) {
      return (
        <div className={noResults}>
          No results have been found for {searchState.query} 😱
        </div>
      )
    } else {
      return (
        <div className={hitsWrapper}>
          <Hits hitComponent={Film} />
        </div>
      )
    }
  }
)

class Results extends Component {
  constructor () {
    super()
    this.state = {
      result: {}
    }
  }

  render () {
    return (
      <div className={results}>
        <Content />
        <Pagination />
      </div>
    )
  }
}

export default Results
