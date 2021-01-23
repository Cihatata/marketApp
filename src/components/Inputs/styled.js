import styled from 'styled-components';

const LabelStyled = styled.label`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  outline: currentcolor none 0px;
  margin-bottom: 16px;
  width: 100%;
`

const RadioAndCheckboxWrapper = styled.span`
  position: relative;
`
const RadioInput = styled.input`
  position: absolute;
  inset: 0px;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
  overflow: visible;
`;

const RadioBox = styled.span`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 2px;
  cursor: pointer;
  border: 2px solid ${(props) => props.checked ? `#1ea4ce` : '#DFDEE2'};
  border-radius: 100px;
  transition: all 0.3s ease 0s;
`;

const LabelHeader = styled.span`
  position: relative;
  color: rgb(82, 82, 82);
  line-height: 18px;
  letter-spacing: 0.16px;
  padding-left: 12px;
  font-size: 12px;
  font-weight: normal;
`
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 2px solid rgb(223, 222, 226);
  border-radius: 2px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease 0s;
  height: 44px;
  &:hover{
    border-color: #1ea4ce;
  }
  &:focus{
    border-color: #1ea4ce;
    outline: currentcolor none 0px;
  }
  &:focus-within{
    border-color: #1ea4ce;
  }

`
const SearchHeaderInput = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  border: none;
  &:focus{
    border-color: #1ea4ce;
    outline: currentcolor none 0px;
  }
  &:focus-within{
    border-color: #1ea4ce;
    outline: currentcolor none 0px;
  }
`;

const SearchInput = styled.input`
  position: relative;
  color: rgb(25, 25, 25);
  line-height: 24px;
  letter-spacing: 0.15px;
  height: 100%;
  padding-left: 14px;
  padding-right: 14px;
  outline: 0;
  border: none;
  font-size: 14px;
  &:focus{
    outline: currentcolor none 0px;;
  }
  &::placeholder{
    color: #A8A8A8;
  }
`;

const CheckboxContainer = styled.div`
  width: 100%;
  height: 142px;
  margin-top: 17px;
  overflow-y: scroll;
  padding:4px;

`
// const LabelCheckbox = styled.label`
//   display: inline-flex;
//   align-items: center;
//   vertical-align: middle;
//   user-select: none;
//   margin-right: 12px;
//   cursor: pointer;
//   outline: currentcolor none 0px;
//   width: 100%;
//   margin-bottom: 18px;
// `

const CheckboxInput = styled.input`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  inset: 0px;
  opacity: 0;
`
const CheckboxCheck = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 2px;
  background-color: ${(props) => props.bgColor};
  border-radius: 2px;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  z-index: 1;
  margin-left:2px;
`

export {
  LabelStyled,
  RadioBox,
  RadioInput,
  RadioAndCheckboxWrapper,
  LabelHeader,
  SearchWrapper,
  SearchInput,
  SearchHeaderInput,
  CheckboxContainer,
  //LabelCheckbox,
  CheckboxInput,
  CheckboxCheck,


}