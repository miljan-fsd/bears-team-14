import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search by job title, keyword or location...',
})`
  background-color: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #555;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 60px;
  padding: 12px 35px 12px 20px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &::placeholder {
    color: #999;
    font-weight: 300;
  }

  &:focus {
    border-color: #66afe9;
    box-shadow: 0 0 10px 1px rgba(102, 175, 233, 0.6);
    outline: none;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  align-items: center;
  background-color: #04d092;
  border: 1px solid #04d092;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  height: 60px;
  margin-top: 12px;
  outline-color: transparent;
  padding: 10px 16px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  word-spacing: 5px;

  & > .fa {
    font-size: 14px;
  }

  &:hover {
    background-color: #26b999;
    border: 1px solid #26b999;
    color: #fff;
  }
`;
