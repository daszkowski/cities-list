import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
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
    this.removeFromSearchedList = this.removeFromSearchedList.bind(this);
    this.addToSearchedList = this.addToSearchedList.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      value
    });

    this.requestSuggestions(value);
  }

  removeFromSearchedList(item) {
    const { searchedCities } = this.state;

    this.setState({
      searchedCities: searchedCities.filter((city) => city.id !== item.id)
    });
  }

  addToSearchedList(city) {
    const { searchedCities } = this.state;

    this.setState({
      searchedCities: [...searchedCities, city]
    });
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
    const {className} = this.props;
    const {
      searchedCities,
      value,
    } = this.state;

    return (
      <div className={`${className} App`}>
        <SearchBox
          handleChange={this.handleChange}
          searchedCities={searchedCities}
          removeFromSearchedList={this.removeFromSearchedList}
          value={value}
        />
        <CitiesList addToSearchedList={this.addToSearchedList} />
      </div>
    );
  }
}

const Styled = styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Styled;
