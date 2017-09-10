import styled from 'styled-components';

import { navbarHeight } from '../../common-styles/layout';

export const Wrapper = styled.nav`
  align-items: center;
  background-color: #fff;
  color: #666;
  display: flex;
  flex-direction: row;
  font-family: Raleway, 'Open Sans', Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: ${navbarHeight}px;
  justify-content: flex-start;
  left: 0;
  position: fixed;
  right: 0;
  text-transform: uppercase;
  top: 0;
  width: 100%;
`;

export const Logo = styled.div`
  align-items: center;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  color: #18e28c;
  display: flex;
  flex-direction: row;
  height: ${navbarHeight}px;
  max-height: ${navbarHeight}px;
  width: ${navbarHeight * 2}px;

  & p {
    position: relative;
    left: 80px;
  }
`;

export const ProfileLink = styled.div`
  border-bottom: 2px solid transparent;
  flex: 1;
  text-align: center;
`;
