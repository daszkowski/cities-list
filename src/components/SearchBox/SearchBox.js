import React from 'react';
import Autocomplete from 'react-autocomplete';

export const SearchBox = ({
  className,
  value,
  handleChange,
  searchedCities,
}) => {
  return (
    <div className={className}>
      <Autocomplete
        getItemValue={(item) => item.id}
        items={searchedCities}
        renderItem={(item, isHighlighted) =>
          <div  key={item.id}  style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.id} {item.name}
          </div>
        }
        value={value}
        onChange={(event) => {
          handleChange(event);
        }}
        onSelect={(value, item) => {
          console.log('selected', item)
        }}
      />
    </div>
  );
};

export default SearchBox;