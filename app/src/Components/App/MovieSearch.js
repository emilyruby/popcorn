import React, { Component } from 'react'
import SearchWrapper from './MovieSearch/SearchWrapper.js'
import { Switch, Route } from 'react-router-dom'
import AddMovie from './MovieSearch/AddMovie.js'
import { css } from 'glamor'
import Search from './MovieSearch/SearchWrapper/Search.js'
import AddNewMovieButton from './MovieSearch/AddNewMovieButton.js'

const title = css({
  'fontFamily': 'Monofett',
  'fontSize': '10vh',
  'color': 'fuchsia',
  'margin': '3%'
})

const movieSearch = css({
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'nowrap',
  'alignItems': 'center',
  justifyContent: 'center',
  'height': '100vh'
})

const left = css({
  'order': '1',
  'flexGrow': '1',
  'justifyContent': 'center',
  'alignItems': 'center',
  'width': '30vw',
  'display': 'flex',
  'flexDirection': 'column'
})

class MovieSearch extends Component {
  render () {
    return (
      <div className={movieSearch}>
        <div className={left}>
          <h1 className={title}>POPCORN</h1>
          <Search />
          <Route exact path='/' component={AddNewMovieButton} />
        </div>
        <Switch>
          <Route exact path='/add' component={AddMovie} />
          <Route exact path='/' component={SearchWrapper} />
        </Switch>
      </div>
    )
  }
}

export default MovieSearch
