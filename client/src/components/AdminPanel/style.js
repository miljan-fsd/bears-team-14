import styled from 'styled-components';
import FlipMove from 'react-flip-move';

import {
  breakLarge,
  breakMiddle,
  // breakSmall,
} from './../../common-styles/layout';

const rowLayout = `24px minmax(100px, 1fr) 2fr 48px 180px 40px 40px`;
const controlsHeight = `100px`;
const headerBgroundColor = `#4285f4`;

export const FlipWithStyle = styled(FlipMove)`
  margin-top: 156px;
  width: 100%;
`;

export const ClipTextField = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
`;

export const PositionDescription = ClipTextField.extend`
  justify-self: start;
  min-width: 100px;
`;

export const CompanyName = ClipTextField.extend`font-weight: bold;`;

export const FaButton = styled.button`
  align-items: center;
  border: none;
  background-color: inherit;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 5px;
  width: 36px;
  transition: color 0.15s;

  & .fa {
    font-size: 24px;
    pointer-events: none;
  }

  &:hover {
    color: ${props => (props.danger ? 'red' : '#276cda')};
  }

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;

export const DataLine = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, .12),
    0 2px 4px rgba(0, 0, 0, .24);
  display: grid;
  grid-template-columns: ${rowLayout};
  height: 44px;
  justify-items: center;
  margin: auto;
  max-width: 1170px;
  opacity: 1;
  padding: 0 5px;
  width: 100%;

  &:hover {
    background-color: #eee;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  cursor: wait;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  background-color: inherit;
  border: 1px solid gray;
  border-radius: 3px;
  display: flex;
  font-size: 16px;
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

export const Controls = styled.nav`
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 0 1 2px 4px #f2f2f2;
  display: flex;
  flex-direction: row;
  height: ${controlsHeight};
  justify-content: space-around;
  max-width: 1170px;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media (min-width: ${breakLarge}px) {
    max-width: calc(1170px + 8px);
  }
`;

export const TableWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TableHeader = DataLine.extend`
  background-color: ${headerBgroundColor};
  color: #fff;
  font-weight: bold;
  height: 56px;
  margin: auto;
  margin-top: ${controlsHeight};
  position: fixed;
  width: calc(100vw - 10px);
  z-index: 1;

  &:hover {
    background-color: ${headerBgroundColor};
  }

  @media (max-width: ${breakMiddle}px) {
    width: calc(100vw - 20px);
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
`;
