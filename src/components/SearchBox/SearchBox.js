import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SearchBox = ({
  className,
  value,
  handleChange,
  searchedCities,
  addCityToStore,
  removeFromSearchedList,
  numberOfCities,
  placeholder
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
          addCityToStore(item);
          removeFromSearchedList(item);
        }}
        inputProps={{disabled: numberOfCities > 5, placeholder: placeholder}}
      />
    </div>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchedCities: PropTypes.array,
  addCityToStore: PropTypes.func.isRequired,
  removeFromSearchedList: PropTypes.func.isRequired,
  numberOfCities: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
};

SearchBox.defaultProps = {
  searchedCities: [],
  numberOfCities: 0,
};

const Styled = styled(SearchBox)`
  padding: 20px;
  border-bottom: 1px solid #000;
`;

export default Styled;