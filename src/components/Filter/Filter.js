import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SET_FILTER } from '../../state/types'
import {
  FilterItem,
  FilterCardWrapper,
  FilterHeader
} from './styled';
import { CheckboxContainer } from '../Inputs/styled';
import { ProductNavButtonMobile } from '../Products/styled';
import Radio from '../Inputs/Radio';
import Search from '../Inputs/Search';
import Checkbox from '../Inputs/Checkbox';
import sortingElements from '../../Service/SortingElements';
import Brands from '../../Service/brandsData';
import Tags from '../../Service/tagsData';

const Filter = (props) => {
  const { setIsClickFilter } = props;
  const [searchValue, setSearchValue] = useState({
    tag: '',
    brand: '',
  });

  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearchValue = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value })
  }

  // Has it been added before? if added, remove array(splice) if didnt add, value push to array 
  const selectCheckbox = (value, name) => {
    const previousArr = filter[name];
    const isSelected = previousArr.includes(value);
    if (isSelected) {
      const index = previousArr.indexOf(value);
      previousArr.splice(index, 1)
    } else {
      previousArr.push(value);
    }
    return previousArr;
  };

  // If any filter changes(sorting, brands, tags), update redux
  const changeFilter = (e) => {
    const { name, value } = e.target;
    if (name === 'tags' || name === 'brands') {
      const newArr = selectCheckbox(value, name)
      dispatch({ type: SET_FILTER, payload: { name, value: newArr } })
    } else {
      dispatch({ type: SET_FILTER, payload: { name, value: Number(value) } })
    }
  }

  //search Brands or Tags
  const arraySearch = (value, array) => {
    return array.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
    )
  }

  return (
    <>
      <ProductNavButtonMobile
        color="#fff"
        bgColor="#222"
        onClick={() => setIsClickFilter(false)}>
        Close
      </ProductNavButtonMobile>
      <FilterItem>
        <FilterHeader>Sorting</FilterHeader>
        <FilterCardWrapper data-testid="sorting">
          {sortingElements.map((item, index) =>
            <Radio
              sortingId={filter.sortingId}
              changeFilter={changeFilter}
              key={item.id}
              header={item.header}
              id={item.id}
            />
          )}
        </FilterCardWrapper>
      </FilterItem>
      <FilterItem>
        <FilterHeader>Brands</FilterHeader>
        <FilterCardWrapper>
          <Search
            handleSearch={handleSearchValue}
            searchValue={searchValue.brand}
            placeholder="Search Brand"
            name="brand"
          />
          <CheckboxContainer data-testid="brand-label-wrapper">
            {Brands && arraySearch(searchValue.brand, Brands).map((item, index) =>
              <Checkbox
                tabIndex={parseInt(`-${index}`)}
                key={item.slug}
                header={item.name}
                id={item.slug}
                selectedBox={filter.brands}
                selectBox={changeFilter}
                name="brands"
              />
            )}
          </CheckboxContainer>
        </FilterCardWrapper>
      </FilterItem>
      <FilterItem>
        <FilterHeader>Tags</FilterHeader>
        <FilterCardWrapper>
          <Search
            data-testid="input-search-tag"
            placeholder="Search Tag"
            handleSearch={handleSearchValue}
            searchValue={searchValue.tag}
            name="tag"
          />
          <CheckboxContainer data-testid="tag-label-wrapper">
            {Tags && arraySearch(searchValue.tag, Tags).map((item, index) =>
              <Checkbox
                tabIndex={parseInt(`-${index}`)}
                key={index}
                header={item.name}
                id={item.name}
                selectedBox={filter.tags}
                selectBox={changeFilter}
                name="tags"
              />
            )}
          </CheckboxContainer>
        </FilterCardWrapper>
      </FilterItem>
    </>
  )
}

Filter.propTypes = {
  setIsClickFilter: PropTypes.func.isRequired // For Mobile Design - Sidebar Open Button
}

export default Filter;