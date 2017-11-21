import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NewMovieForm from './AddMovie/NewMovieForm.js'
import { css } from 'glamor'

const styles = {
  textDecoration: 'none',
  color: 'white',
  backgroundColor: 'fuchsia',
  borderRadius: '3px',
  padding: '8px',
  boxShadow: '0 1px 3px fuchsia, 0 1px 2px aqua',
  marginTop: '15px',
  border: '3px solid white'
}

const wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  order: '2',
  width: '60vw',
  color: 'white'
})

class AddMovie extends Component {
  render () {
    return (
      <div className={wrapper}>
        <NewMovieForm />
        <Link style={styles} to='/'>Back to Search</Link>
      </div>
    )
  }
}

export default AddMovie
