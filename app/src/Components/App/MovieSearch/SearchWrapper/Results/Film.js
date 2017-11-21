import React, { Component } from 'react'
import { css } from 'glamor'
import Notifications, {notify} from 'react-notify-toast'
import { algoliaClient } from '../../../../../algolia.js'
import Stars from './Film/Stars.js'
import DeleteMovieModal from './Film/DeleteMovieModal.js'
import ErrorModal from './Film/ErrorModal.js'
import fetch from 'isomorphic-fetch'

const hitWrapper = css({
  'height': '335px',
  'margin': '7px',
  'borderRadius': '15px',
  'display': 'flex',
  'flexDirection': 'column',
  'backgroundColor': 'white',
  'transition': 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  'position': 'relative',
  ':hover': {
    height: '340px'
  }
})

const filmImage = css({
  'width': '200px',
  'height': 'auto',
  'borderRadius': '15px',
  'boxShadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  'WebkitMaskImage': '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(234,233,222,0)))'
})

const deleteMovieWrapper = css({
  'color': 'fuchsia',
  'textAlign': 'center',
  'margin': '0px',
  'marginTop': '2px',
  'cursor': 'pointer'
})

const movieName = css({
  position: 'absolute',
  top: '15px',
  right: '0px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  textTransform: 'uppercase',
  width: 'auto',
  height: 'auto',
  textAlign: 'right',
  color: 'white',
  fontSize: '17px',
  borderRadius: '8px',
  padding: '5px'
})

class Film extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      error: false,
      show: true
    }
    this.showDeleteMovieModal = this.showDeleteMovieModal.bind(this)
    this.closeDeleteMovieModal = this.closeDeleteMovieModal.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  showDeleteMovieModal () {
    this.setState({
      showModal: true
    })
  }

  closeDeleteMovieModal () {
    this.setState({
      showModal: false
    })
  }

  deleteMovie () {
    fetch(`/api/1/movies/${this.props.hit.objectID}`, {
      method: 'delete'
    }).then(res => {
      this.closeDeleteMovieModal()
      if (res.status !== 200) {
        notify.show('Error deleting Movie :(', 'error')
      } else {
        notify.show('Movie Deleted :)', 'success')
        algoliaClient.clearCache()
        this.setState({show: false})
        this.forceUpdate()
      }
    },
    err => {
      console.log(err)
      notify.show('Something went wrong!', 'error')
    })
  }

  render () {
    const show = this.state.show
    return (
      <div>
        {show ? (
          <div>
            <div className={hitWrapper}>
              <Notifications />
              <div className='film-image-wrapper'>
                <img
                  src={this.props.hit.image}
                  height='200px'
                  className={filmImage}
                  alt='Film Cover' />
                <Stars rating={this.props.hit.rating} />
              </div>
              <div className={movieName}>
                {this.props.hit.title}
              </div>
              <div onClick={this.showDeleteMovieModal}>
                <p className={deleteMovieWrapper}>delete this movie</p>
              </div>
            </div>
            <DeleteMovieModal
              isOpen={this.state.showModal}
              closeModal={this.closeDeleteMovieModal}
              title={this.props.hit.title}
              deleteMovie={this.deleteMovie} />
            <ErrorModal
              isOpen={this.state.error}
              onRequestClose={this.closeErrorModal}
              title={this.props.hit.title} />
          </div>
        ) : <div />}
      </div>
    )
  }
}

export default Film
