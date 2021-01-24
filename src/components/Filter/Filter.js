import React, { useState } from 'react';
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
import sortingElements from './SortingElements';
import Brands from './Brands';
import Tags from './Tags';

const Filter = (props) => {
  const {
    sortingId,
    setSortingId,
    selectedBrands,
    setSelectedBrands,
    selectedTags,
    setSelectedTags,
    setIsClickFilter,
  } = props; 
  const [searchValue, setSearchValue] = useState({
    tag: '',
    brand: '',
  });

  const handleSearchValue = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value })
  }

  const selectCheckbox = (id, state, setState) => {
    const previousArr = state;
    const isSelected = previousArr.includes(id);
    if (isSelected) {
      const index = previousArr.indexOf(id);
      previousArr.splice(index, 1)
      setState([...previousArr]);
    } else {
      setState([...state, id]);
    }
  };

  const searchBrand = (value) => {
    return Brands.filter((brand) =>
      brand.name.includes(value)
    )
  }

  const searchTag = (value) => {
    return Tags.filter((tag) =>
      tag.includes(value)
    )
  }

  const selectTag = (tag) => {
    selectCheckbox(tag, selectedTags, setSelectedTags);
  }

  const selectBrand = (brand) => {
    selectCheckbox(brand, selectedBrands, setSelectedBrands);
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
              sortingId={sortingId}
              setSortingId={setSortingId}
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
            {Brands && searchBrand(searchValue.brand).map((item, index) =>
              <Checkbox
                tabIndex={parseInt(`-${index}`)}
                key={item.slug}
                header={item.name}
                id={item.slug}
                selectedBox={selectedBrands}
                selectBox={selectBrand}
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
          <CheckboxContainer data-testid="brand-label-wrapper">
            {Tags && searchTag(searchValue.tag).map((item, index) =>
              <Checkbox
                tabIndex={parseInt(`-${index}`)}
                key={index}
                header={item}
                id={item}
                selectedBox={selectedTags}
                selectBox={selectTag}
              />
            )}
          </CheckboxContainer>
        </FilterCardWrapper>
      </FilterItem>
    </>
  )
}

export default Filter;