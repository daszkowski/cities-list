import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE_CITY } from './../../ducks/cities';
import CitiesList from './CitiesList';

class CitiesListContainer extends Component {
  render() {
    const { cities, removeCity, addToSearchedList } = this.props;
    return (
      <CitiesList cities={cities} removeCity={removeCity} addToSearchedList={addToSearchedList} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCity: (id) => {
      dispatch({
        type: REMOVE_CITY,
        payload: {
          id
        }
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesListContainer);