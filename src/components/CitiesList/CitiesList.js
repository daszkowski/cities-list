import React from 'react';

export const CitiesList = ({ cities, removeCity }) => {
  return (
    <div>
      {cities.map((city) =>
        <div className="list-item" key={city.id}>
          {city.name} - {city.id}
          <button onClick={() => { removeCity(city.id)}}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default CitiesList;