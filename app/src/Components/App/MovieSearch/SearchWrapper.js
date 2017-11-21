import React, { Component } from 'react'
import Results from './SearchWrapper/Results.js'
import { css } from 'glamor'

const right = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: '1',
  order: '2',
  width: '60vw',
  alignSelf: 'flex-start'
})

class SearchWrapper extends Component {
  render () {
    return (
      <div className={right}>
        <Results />
      </div>
    )
  }
}

export default SearchWrapper
