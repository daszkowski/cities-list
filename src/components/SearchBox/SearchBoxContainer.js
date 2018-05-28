import React, { Component } from 'react';
import SearchBox from './SearchBox';

class SearchBoxContainer extends Component {
  render() {
    const {
      handleChange,
      searchedCities,
      value
    } = this.props;

    return (
      <SearchBox
        handleChange={handleChange}
        value={value}
        searchedCities={searchedCities}
      />
    );
  }
}

export default SearchBoxContainer;