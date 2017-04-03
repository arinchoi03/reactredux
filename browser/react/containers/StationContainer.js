import { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import Station from '../components/Station';
import {convertSong} from '../utils';
import { toggleSong} from '../action-creators/player'

class StationContainer extends Component {
  constructor() {
    super();
    this.state = store.getState()
  }


  render() {

    return (
      <Station />
    )

  }

}

const mapStateToProps = function (state, ownProps) {
  console.log('Own Props: ', ownProps);
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
    //songs:
  };
}
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list){
      dispatch(toggleSong(song, list));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Station)
