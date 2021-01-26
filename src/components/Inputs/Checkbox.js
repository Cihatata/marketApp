import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelStyled,
  LabelHeader,
  RadioAndCheckboxWrapper,
  CheckboxInput,
  CheckboxCheck,
} from './styled';


const Checkbox = ({ header, id, selectedBox, selectBox, tabIndex, name }) => {
  const isSelected = () => {
    return selectedBox.includes(id)
  }
  //for accessibility
  const enterPress = (e) => {
    //enter
    if (e.keyCode === 13) selectBox(Number(id) || id);
  }
  return (
    <LabelStyled>
      <RadioAndCheckboxWrapper>
        <CheckboxInput
          value={id}
          checked={isSelected()}
          type="checkbox"
          onChange={() => { }}
          onClick={selectBox}
          tabIndex={tabIndex}
          aria-checked={isSelected()}
          onKeyDown={enterPress}
          name={name}
        />
        <CheckboxCheck bgColor={isSelected() ? '#1ea4ce' : '#fff'}>
          {isSelected() && <svg width="14" height="14" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L3.5 6L1 3.72727" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
        </CheckboxCheck>
      </RadioAndCheckboxWrapper>
      <LabelHeader>{header}</LabelHeader>
    </LabelStyled>
  );
}

Checkbox.propTypes = {
  header: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string, // For Tag
    PropTypes.number  // For Brand
  ]),
  tabIndex: PropTypes.number, //Input attribute
  name: PropTypes.string.isRequired, //Input attribute
  selectedBox: PropTypes.array.isRequired, // selected Elements Array
  selectBox: PropTypes.func.isRequired, // handleChange
}

export default Checkbox;