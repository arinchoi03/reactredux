import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { connect } from 'react-redux';
import {searchLyrics} from '../action-creators/lyrics';

const mapStateToProps = function(state) {
  return {
    lyrics: state.lyrics.text
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleSubmit: function({artistQuery, songQuery}) {
      dispatch(searchLyrics(artistQuery, songQuery))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);

