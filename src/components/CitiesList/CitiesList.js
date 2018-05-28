import React from 'react';

export const CitiesList = ({ cities }) => {
  return (
    <div>
      {cities.map((city) =>
        <div className="list-item" key={city.id}>
          {city.name} - {city.id}
        </div>
      )}
    </div>
  );
};

export default CitiesList;