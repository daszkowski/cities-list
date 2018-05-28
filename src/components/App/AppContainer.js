import React, { Component } from 'react';
import _ from 'lodash';
import SearchBox from '../SearchBox';
import CitiesList from '../CitiesList';

const url = 'http://0.0.0.0:8080/v1/autocomplete?q=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedCities: [],
      value: ''
    };

    this.requestSuggestions = _.debounce(this.requestSuggestions, 1000);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      value
    });

    this.requestSuggestions(value);
  }

  async requestSuggestions(city) {

    const requestUrl = url + city;

    this.setState({
    });

    try {
      const response = await fetch(requestUrl);
      const parseResponse = await response.json();

      this.setState({
        searchedCities: parseResponse,
      })
    }
    catch (error) {
      console.log('there was an error', error)
    }
  }

  render() {
    const {
      searchedCities,
      value,
    } = this.state;

    return (
      <div className="App">
        <SearchBox
          handleChange={this.handleChange}
          searchedCities={searchedCities}
          value={value}
        />
        <CitiesList />
      </div>
    );
  }
}

export default App;
