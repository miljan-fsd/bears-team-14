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

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  cursor: wait;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  height: 1.5rem;
  margin: 5px;
  margin-right: 8px;
  outline: none;
  position: relative;
  width: 1.5rem;

  &:checked::after{
    color: green;
    content: '\u2714';
    font-size: 2rem;
    left: -0.05em;
    position: absolute;
    top: -0.25em;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.danger ? '#ff3860' : '#3273dc')};
  border: none;
  border-radius: 3px;
  color: #fff;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  height: 2.25em;
  justify-content: center;
  margin: 5px;
  min-width: 64px;
  padding: 5px 12px;

  &:hover {
    background-color: ${props => (props.danger ? '#ff2b56' : '#276cda')};
  }
`;
