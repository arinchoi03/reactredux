import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import { connect } from 'react-redux';
import store from '../store';

class FilterableArtists extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().match(inputValue.toLowerCase()));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return{
    artists: state.artists.list
  }
}

export default connect(mapStateToProps, null)(FilterableArtists);
