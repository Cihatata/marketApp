import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelStyled,
  RadioBox,
  RadioInput,
  RadioAndCheckboxWrapper,
  LabelHeader,
} from './styled';

const Radio = ({ header, id, sortingId, changeFilter }) => {
  return (
    <LabelStyled data-testid={`sorting-radio-${id}`}>
      <RadioAndCheckboxWrapper>
        <RadioInput 
          checked={sortingId === id} 
          value={id} 
          onChange={changeFilter}
          type="radio" 
          name="sortingId" 
          tabIndex={0}
          aria-checked={sortingId === id}
        />
        <RadioBox checked={sortingId === id}>
          {(sortingId === id) && <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L3.5 6L1 3.72727" stroke="#1EA4CE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
        </RadioBox>
      </RadioAndCheckboxWrapper>
      <LabelHeader>{header}</LabelHeader>
    </LabelStyled>
  );
};

Radio.propTypes = {
  header: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}


export default Radio;