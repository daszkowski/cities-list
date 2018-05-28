import React, { Component } from 'react';

const url = 'http://0.0.0.0:8080/v1/autocomplete?q=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedCities: [],
      value: ''
    };

  }

  render() {
    const {
      searchedCities,
      value,
    } = this.state;

    return (
      <div className={'App'}>
        <div>App Container</div>
      </div>
    );
  }
}

export default App;
