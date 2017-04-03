import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = function(state, OwnProps){
  // console.log('state in Sidebar container', state)
  return {
    playlists: state.playlists
  }
 }

export default connect(mapStateToProps, null)(Sidebar);
