import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CitiesList = ({ className, cities, removeCity, addToSearchedList }) => {
  return (
    <div className={className}>
      {cities.length >= 6 && <div className="cities-list-limit">Max 6 cities on list. Please remove some to add new.</div>}
      {cities.map((city) =>
        <div className="cities-list-item" key={city.id}>
          {city.name} - {city.id}
          <button onClick={() => { removeCity(city.id); addToSearchedList(city);}}>Remove</button>
        </div>
      )}
    </div>
  );
};

CitiesList.propTypes = {
  className: PropTypes.string.isRequired,
  cities: PropTypes.array,
  removeCity: PropTypes.func.isRequired,
  addToSearchedList: PropTypes.func.isRequired,
};

CitiesList.defaultProps = {
  cities: [],
};

const Styled = styled(CitiesList)`
  padding: 10px 0;

  .cities-list-limit {
    color: red;
    padding: 10px;
  }

  .cities-list-item {
    padding: 5px 0;
  }
`;

export default Styled;