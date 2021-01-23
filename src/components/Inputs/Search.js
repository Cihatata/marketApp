import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchWrapper,
  SearchInput,
  SearchHeaderInput,
} from './styled';

const Search = ({ handleSearch, searchValue, placeholder, name }) => {
  console.log(placeholder);
  return (
    <SearchWrapper>
      <SearchHeaderInput>
        <SearchInput
          placeholder={placeholder}
          value={searchValue}
          onChange={handleSearch}
          name={name}
          tabIndex={0}
        />
      </SearchHeaderInput>
    </SearchWrapper>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Search;