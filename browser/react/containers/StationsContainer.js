import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import Stations from '../components/Stations'

class StationsContainer extends Component {
  constructor() {
    super();
    this.state = store.getState()
  }


  render() {

  }

}

const convertSongsToStations = function(songsArray) {
  // songsArray.map(song => song.genre === selectedGenre)
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  })
  return stations;
}

const mapStateToProps = (state) => ({stations: convertSongsToStations(state.songs)})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stations)
