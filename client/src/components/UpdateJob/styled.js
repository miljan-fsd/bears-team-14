import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 16px;

  & textarea,
  & > input {
    width: 100%;
  }

  & textarea {
    font-size: 16px;
    min-height: 100px;
  }
`;
