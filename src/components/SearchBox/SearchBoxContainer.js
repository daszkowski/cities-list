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
      numberOfCities,
    } = this.props;

    return (
      <SearchBox
        handleChange={handleChange}
        value={value}
        searchedCities={searchedCities}
        addCityToStore={addCityToStore}
        removeFromSearchedList={removeFromSearchedList}
        numberOfCities={numberOfCities}
        placeholder={'Please enter DE city'}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfCities: state.cities.length
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
