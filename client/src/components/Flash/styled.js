import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => (props.danger ? '#ff3860' : '#3273dc')};
  opacity: 0.95;
  color: #fff;
  font-size: 18px;
  left: 0;
  margin: auto;
  max-width: 500px;
  padding: 20px 40px;
  position: fixed;
  right: 0;
  text-align: center;
  top: 68px;
  vertical-align: middle;
  width: 100%;
  z-index: 1;
`;
