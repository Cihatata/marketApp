import styled from 'styled-components';

const FilterItem = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const FilterHeader = styled.div`
  margin-bottom: 14px;
  font-size: 13px;
  color: #697488;
  font-weight: 600;
  font-family: Open Sans;
`;

const FilterCardWrapper =  styled.div`
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  width: 100%;
  padding: 24px;
`

export {
  FilterItem,
  FilterHeader,
  FilterCardWrapper,
}