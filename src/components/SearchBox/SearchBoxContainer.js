import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ADD_CITY} from './../../ducks/cities';
import SearchBox from './SearchBox';

class SearchBoxContainer extends Component {
  render() {
    const {
      handleChange,
      searchedCities,
      value,
      addCityToStore,
      removeFromSearchedList,
    } = this.props;

    return (
      <SearchBox
        handleChange={handleChange}
        value={value}
        searchedCities={searchedCities}
        addCityToStore={addCityToStore}
        removeFromSearchedList={removeFromSearchedList}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCityToStore: (value) => {
      dispatch({
        type: ADD_CITY,
        payload: {
          value
        }
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchBoxContainer);
