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

const RadioWrapper = styled.span`
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

export {
  LabelStyled,
  RadioBox,
  RadioInput,
  RadioWrapper,
  LabelHeader,
}