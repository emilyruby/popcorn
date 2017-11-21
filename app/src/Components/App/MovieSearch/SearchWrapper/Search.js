import React, { Component } from 'react'
import { SearchBox, Stats } from 'react-instantsearch/dom'
import { Route, withRouter } from 'react-router-dom'
import { css } from 'glamor'
import Refinements from './Search/Refinements.js'

const searchBoxWrapper = css({
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'justifyContent': 'center',
  'color': 'black',
  marginBottom: '15px'
})

class Search extends Component {
  render () {
    return (
      <div className={searchBoxWrapper}>
        <div className={searchBoxWrapper}>
          <SearchBox
            autoFocus
            translations={{placeholder: 'Search for films...'}}
            onChange={(e) => this.props.history.push('/')}
          />
        </div>
        <Stats />
        <Route exact path='/' component={Refinements} />
      </div>
    )
  }
}

export default withRouter(Search)
