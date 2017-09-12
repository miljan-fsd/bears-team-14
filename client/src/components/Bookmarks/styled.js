import styled from 'styled-components';

export const Header = styled.h2`
  color: #000;
  display: block;
  font-family: Raleway, 'Open Sans', Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin: 40px 0 20px 0;

  @media (min-width: 768px) {
    font-size: 48px;
    margin: 100px 0 40px 0;
  }
`;

export const Status = styled.div`
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  margin: 40px auto;
  text-align: center;

  & > strong {
    font-weight: 600;
  }
`;
