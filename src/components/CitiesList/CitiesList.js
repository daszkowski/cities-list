import React from 'react';
import styled from 'styled-components';

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