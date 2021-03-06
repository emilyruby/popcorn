import React, { Component } from 'react'
import { css } from 'glamor'
import ReactModal from 'react-modal'

const modalButton = css({
  'transition': 'opacity 300ms linear',
  'background': 'white',
  'color': 'fuchsia',
  'border': '4px solid aqua',
  'fontSize': '16px',
  'marginLeft': '8px',
  'marginRight': '8px'
})

const errorModalStyle = {
  content: {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height': '100px',
    'width': '300px',
    'top': '50%',
    'left': '50%',
    'right': 'auto',
    'bottom': 'auto',
    'marginRight': '-50%',
    'transform': 'translate(-50%, -50%)',
    'border': '5px solid fuchsia',
    'textAlign': 'center'
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
}

const buttonWrapper = css({
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'nowrap',
  'alignItems': 'center'
})

const closeButton = css({
  'position': 'absolute',
  'top': '20px',
  'right': '20px'
})

class DeleteMovieModal extends Component {

  render () {
    return (
      <ReactModal
        isOpen={this.props.error}
        onRequestClose={this.props.closeErrorModal}
        style={errorModalStyle}
      >
        <i
          className='fa fa-times' {...closeButton}
          aria-hidden='true'
          onClick={this.props.closeErrorModal} />
        <p>
          <span role='img' aria-label='Alarm'>🚨</span>
          There was an error deleting {this.props.title}!
          <span role='img' aria-label='Alarm'>🚨</span>
        </p>
        <div className={buttonWrapper}>
          <button
            className={modalButton}
            onClick={this.props.closeErrorModal}>
            Okay :(
          </button>
        </div>
      </ReactModal>
    )
  }
}

export default DeleteMovieModal
