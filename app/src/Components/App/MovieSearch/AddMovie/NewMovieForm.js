import React, { Component } from 'react'
import { css } from 'glamor'
import Notifications, {notify} from 'react-notify-toast'
import ReactStars from 'react-stars'
import fetch from 'isomorphic-fetch'

const formWrapper = css({
  'borderRadius': '5px',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  color: 'black',
  'fontWeight': 'lighter'
})

const addMovieForm = css({
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'width': '50vw'
})

const formButton = css({
  'transition': 'opacity 300ms linear',
  'color': 'white',
  'fontSize': '2vh',
  'margin': '5px',
  'paddingTop': '8px',
  'paddingBottom': '8px',
  'border': '0',
  'borderRadius': '3px'
})

const submitButton = css({
  'margin': '15px',
  'background': 'fuchsia',
  'width': '30%',
  'marginTop': '8%'
})

const formInput = css({
  'width': '50%',
  'borderRadius': '4px',
  'padding': '5px',
  'height': '30px',
  'border': '1px solid fuchsia',
  'boxShadow': 'none',
  'margin': '8px',
  'fontSize': '15px'
})

const formLabel = css({
  'margin': '8px'
})

class NewMovieForm extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.ratingChanged = this.ratingChanged.bind(this)
    this.success = this.success.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const obj = {
      'title': this.state.title,
      'image': this.state.image,
      'year': this.state.year,
      'rating': this.state.rating
    }

    fetch('/api/1/movies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    }).then((res) => {
      if (res.status === 200) {
        this.success()
      } else {
        this.failure(res)
      }
    }, (err) => {
      console.log(err)
    })
  }

  success (event) {
    this.refs.title.value = ''
    this.refs.image.value = ''
    this.refs.year.value = ''
    notify.show('Movie Added! :)', 'success')
  }

  failure (error) {
    error.json().then(
      value => {
        console.log(value)
        notify.show('Error adding Movie :( - Please change ' + value.toString(), 'error')
      },
      err => console.error(err)
    )
  }

  handleChange (event) {
    let name = event.target.name

    let obj = {}
    obj[name] = event.target.value

    this.setState(obj)
  }

  ratingChanged (newRating) {
    this.setState({rating: newRating})
  }

  render () {
    return (
      <div className={formWrapper}>
        <h1>Add a New Movie</h1>
        <form
          className={addMovieForm}
          onSubmit={this.handleSubmit}>
          <label className={formLabel} htmlFor='title'>Title of Movie</label>
          <input
            className={formInput}
            id='title'
            name='title'
            type='text'
            ref='title'
            onChange={this.handleChange}
            placeholder='The Incredibles 2' />
          <label className={formLabel} htmlFor='image'>Image URL:</label>
          <input
            className={formInput}
            id='image'
            name='image'
            type='url'
            ref='image'
            onChange={this.handleChange}
            placeholder='http://bit.ly/2ygFvou' />
          <label className={formLabel} id='year' name='year'>Year Released:</label>
          <input
            name='year'
            type='number'
            ref='year'
            pattern='\d+'
            onChange={this.handleChange}
            className={formInput}
            placeholder='2018' />
          <label className={formLabel} id='rating' name='rating'>Your Rating:</label>
          <ReactStars
            count={5}
            ref='rating'
            onChange={this.ratingChanged}
            size={36}
            color2={'#ffd700'}
            half={false} />
          <button className={formButton} {...submitButton}>Submit</button>
        </form>
        <Notifications />
      </div>
    )
  }
}

export default NewMovieForm
