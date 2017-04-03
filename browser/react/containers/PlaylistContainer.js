import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import { connect } from 'react-redux';

const mapStateToProps = function(state, ownProps) {
  return {
    currentSong: state.currentSong,
    selectedPlaylist: state.playlists.selected,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleOne: ownProps.toggle,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
