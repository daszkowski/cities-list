import React, { Component } from 'react';
import { connect } from 'react-redux';
import CitiesList from './CitiesList';

class CitiesListContainer extends Component {
  render() {
    const { cities } = this.props;
    return (
      <CitiesList cities={cities} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, null)(CitiesListContainer);