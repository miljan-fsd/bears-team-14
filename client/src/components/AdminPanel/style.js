import styled from 'styled-components';

export const DataLine = styled.div`
  align-items: center;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-top: 5px;
  max-width: 1170px;
  padding: 5px;
  width: 100%;
`;

export const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.danger ? '#ff3860' : '#1db6ef')};
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  height: 2.25em;
  justify-content: center;
  margin: 5px;
  padding: 5px 12px;
  width: 64px;
`;
