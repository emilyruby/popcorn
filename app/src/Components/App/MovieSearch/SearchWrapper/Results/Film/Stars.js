import React, { Component } from 'react'
import { css } from 'glamor'

const stars = css({
  position: 'absolute',
  bottom: '40px',
  width: '200px',
  textAlign: 'center',
  fontSize: '35px',
  color: 'black'
})

class Search extends Component {
  render () {
    return (
      <div className={stars}>
        {
        Array.from(
          new Array(this.props.rating), (val, index) => index).map(
            (photo, i) => {
              return (
                <i className='fa fa-star' aria-hidden='true' key={i} />
              )
            }
          )
        }
      </div>
    )
  }
}

export default Search
