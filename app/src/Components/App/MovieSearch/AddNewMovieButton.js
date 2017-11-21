import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  textDecoration: 'none',
  color: 'black',
  backgroundColor: 'white',
  borderRadius: '3px',
  padding: '8px',
  boxShadow: '0 1px 3px fuchsia, 0 1px 2px aqua',
  marginTop: '35px'
}

class AddNewMovieButton extends Component {
  render () {
    return (
      <Link style={styles} to='/add'>Add New Movie</Link>
    )
  }
}

export default AddNewMovieButton
