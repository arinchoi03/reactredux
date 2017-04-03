import React, {Component} from 'react';
import {searchLyrics} from '../action-creators/lyrics';
import store from '../store';


export default class Lyrics extends Component {

  constructor(props) {
    super(props);
    // console.log('lyrics props', props)
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  handleArtistInput(event) {
    this.setState({ artistQuery: event.target.value });
  }

  handleSongInput(event) {

    this.setState({ songQuery: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state)
    // if (this.state.artistQuery && this.state.songQuery) {
    //   store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    // }
  }

  render() {
    return (
    <div style={{marginTop: '20px'}}>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-6 col-xs-12">
            <label className="col-xs-2 control-label">Artist</label>
            <input
              className="form-control"
              type="text"
              value={this.state.artistQuery}
              placeholder="Enter an artist name"
              onChange={this.handleArtistInput}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <label className="col-xs-2 control-label">Song</label>
            <input
              className="form-control"
              type="text"
              value={this.state.songQuery}
              placeholder="Enter a song name"
              onChange={this.handleSongInput}
            />
          </div>
        </div>
        <pre>{this.props.lyrics || 'Search above!'}</pre>
        <button type="submit" className="btn btn-success">
          Search for Lyrics
        </button>
      </form>
    </div>
  );
  }


}
