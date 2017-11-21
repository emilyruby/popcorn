import React, { Component } from 'react'
import { RefinementList, MultiRange } from 'react-instantsearch/dom'
import { css } from 'glamor'
import {withRouter} from 'react-router-dom'

const refinementWrapper = css({
  marginTop: '10px',
  color: 'black'
})

const title = css({
  color: 'fuchsia',
  fontWeight: 'bolder'
})

class Search extends Component {
  render () {
    return (
      <div className={refinementWrapper}>
        <p className={title}>Genre</p>
        <RefinementList attributeName='genre' />
        <p className={title}>Year</p>
        <MultiRange
          attributeName='year'
          items={[
            {
              end: 2000,
              label: '< 2000'
            },
            {
              end: 2005,
              label: '2000 - 2005',
              start: 2000
            },
            {
              end: 2010,
              label: '2005 - 2010',
              start: 2005
            },
            {
              end: 2015,
              label: '2010 - 2015',
              start: 2010
            },
            {
              label: '>2010',
              start: 2010
            }
          ]}
        />
      </div>
    )
  }
}

export default withRouter(Search)
