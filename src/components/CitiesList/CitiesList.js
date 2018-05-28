import React from 'react';

export const CitiesList = ({ cities, removeCity, addToSearchedList }) => {
  return (
    <div>
      {cities.length >= 6 && <div className="list-limit">Max 6 cities on list. Please remove some to add new.</div>}
      {cities.map((city) =>
        <div className="list-item" key={city.id}>
          {city.name} - {city.id}
          <button onClick={() => { removeCity(city.id); addToSearchedList(city);}}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default CitiesList;