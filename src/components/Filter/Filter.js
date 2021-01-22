import React, { useState } from 'react';
import {
  FilterItem,
  FilterCardWrapper,
  FilterHeader
} from './styled';
import Radio from '../Inputs/Radio';
import sortingElements from './SortingElements';

const Filter = () => {
  const [sortingId, setSortingId] = useState(0);
  return (
    <>
      <FilterItem>
        <FilterHeader>Sorting</FilterHeader>
        <FilterCardWrapper>
          {sortingElements.map((item) =>
            <Radio 
              sortingId={sortingId} 
              setSortingId={setSortingId} key={item.id} header={item.header} id={item.id} />
          )}
        </FilterCardWrapper>
      </FilterItem>
    </>
  )
}

export default Filter;